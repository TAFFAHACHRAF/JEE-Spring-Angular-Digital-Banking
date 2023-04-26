package com.achraf.taffah.jee.controllers;

import com.achraf.taffah.jee.entities.Abonnement;
import com.achraf.taffah.jee.repositories.AbonnementRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@AllArgsConstructor
public class AbonnementController {
    private AbonnementRepository abonnementRepository;

    @GetMapping(path = "/abonnement/abonnements")
    public String clients(Model model, @RequestParam(value = "page", defaultValue = "0") int page,
                          @RequestParam(value = "size", defaultValue = "5") int size,
                          @RequestParam(value = "keyword", defaultValue = "") String keyword) {
        Page<Abonnement> list = abonnementRepository.findByKeywordContains(keyword, PageRequest.of(page, size));
        model.addAttribute("abonnements", list.getContent());
        int[] pages;
        if (list.getTotalPages() > 5) {
            pages = new int[5];
            if (page <= 3) {
                for (int i = 0; i < 5; i++)
                    pages[i] = i;
            } else {
                int j = 0;
                if (page >= (list.getTotalPages() - 2)) {
                    for (int i = list.getTotalPages() - 5; i < list.getTotalPages(); i++)
                        pages[j++] = i;
                } else {
                    for (int i = page - 2; i < (page + 3); i++)
                        pages[j++] = i;
                }
            }
        } else {
            pages = new int[list.getTotalPages()];
            for (int i = 0; i < list.getTotalPages(); i++)
                pages[i] = i;
        }
        model.addAttribute("pages", pages);
        model.addAttribute("currentPage", page);
        model.addAttribute("size", size);
        model.addAttribute("keyword", keyword);
        model.addAttribute("maxPages", list.getTotalPages());
        return "abonnements-list";
    }

    @GetMapping("/abonnement/delete")
    public String deleteAbonnement(@RequestParam Long id, String keyword, int page){
        abonnementRepository.deleteById(id);
        return "redirect:/abonnement/abonnements?page=" + page + "&keyword=" + keyword;
    }

    @GetMapping(path = {"/abonnement/abonnement/abonnements", "/abonnement/abonnements/", "/abonnements"})
    public String index() {
        return "index";
    }

    @GetMapping(path = "/abonnement/new")
    public String newClient(Model model) {
        model.addAttribute("clabonnementient", new Abonnement());
        return "add-abonnement";
    }

    @PostMapping(path = "/abonnement/save")
    public String save(Model model, @Valid Abonnement abonnement, BindingResult bindingResult,
                       @RequestParam(defaultValue = "") String keyword,
                       @RequestParam(defaultValue = "0") int page,
                       @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) return "add-abonnement";
        abonnementRepository.save(abonnement);
        return "redirect:/abonnement/abonnements?page=" + page + "&keyword=" + keyword + "&size=" + size;
    }

    @PostMapping(path = "/abonnement/put")
    public String put(Model model, @Valid Abonnement abonnement, BindingResult bindingResult,
                      @RequestParam(defaultValue = "") String keyword,
                      @RequestParam(defaultValue = "0") int page,
                      @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) return "edit-abonnement";
        abonnementRepository.save(abonnement);
        return "redirect:/abonnement/abonnements?page=" + page + "&keyword=" + keyword + "&size=" + size;
    }

    @GetMapping(path = "/abonnement/edit")
    public String editRessource(Model model, Long id, String keyword, int page, int size) {
        Abonnement abonnement = abonnementRepository.findById(id).orElse(null);
        if (abonnement == null) throw new RuntimeException("Abonnement does not exist !");
        model.addAttribute("abonnement", abonnement);
        model.addAttribute("size", size);
        model.addAttribute("page", page);
        model.addAttribute("keyword", keyword);
        return "edit-abonnement";
    }
}
