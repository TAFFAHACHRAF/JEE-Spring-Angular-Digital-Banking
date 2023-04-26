package com.achraf.taffah.jee.controllers;

import com.achraf.taffah.jee.entities.Client;
import com.achraf.taffah.jee.repositories.ClientRepository;
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
public class ClientController {
    private ClientRepository clientRepository;

    @GetMapping(path = "/client/clients")
    public String clients(Model model, @RequestParam(value = "page", defaultValue = "0") int page,
                             @RequestParam(value = "size", defaultValue = "5") int size,
                             @RequestParam(value = "keyword", defaultValue = "") String keyword) {
        Page<Client> list = clientRepository.findByNomContains(keyword, PageRequest.of(page, size));
        model.addAttribute("clients", list.getContent());
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
        return "clients-list";
    }

    @GetMapping("/client/delete")
    public String deleteClient(@RequestParam Long id, String keyword, int page){
        clientRepository.deleteById(id);
        return "redirect:/client/clients?page=" + page + "&keyword=" + keyword;
    }

    @GetMapping(path = {"/client/client/clients", "/client/clients/", "/clients"})
    public String index() {
        return "index";
    }

    @GetMapping(path = "/client/new")
    public String newClient(Model model) {
        model.addAttribute("client", new Client());
        return "add-client";
    }

    @PostMapping(path = "/client/save")
    public String save(Model model, @Valid Client client, BindingResult bindingResult,
                       @RequestParam(defaultValue = "") String keyword,
                       @RequestParam(defaultValue = "0") int page,
                       @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) return "add-client";
        clientRepository.save(client);
        return "redirect:/client/clients?page=" + page + "&keyword=" + keyword + "&size=" + size;
    }

    @PostMapping(path = "/client/put")
    public String put(Model model, @Valid Client client, BindingResult bindingResult,
                      @RequestParam(defaultValue = "") String keyword,
                      @RequestParam(defaultValue = "0") int page,
                      @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) return "edit-client";
        clientRepository.save(client);
        return "redirect:/client/clients?page=" + page + "&keyword=" + keyword + "&size=" + size;
    }

    @GetMapping(path = "/client/edit")
    public String editRessource(Model model, Long id, String keyword, int page, int size) {
        Client client = clientRepository.findById(id).orElse(null);
        if (client == null) throw new RuntimeException("Client does not exist !");
        model.addAttribute("client", client);
        model.addAttribute("size", size);
        model.addAttribute("page", page);
        model.addAttribute("keyword", keyword);
        return "edit-client";
    }
}
