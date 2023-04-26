package com.achraf.taffah.jee.rest_controllers;

import com.achraf.taffah.jee.entities.Abonnement;
import com.achraf.taffah.jee.repositories.AbonnementRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/abonnement")
@AllArgsConstructor
public class AbonnementRestController {

    private AbonnementRepository abonnementRepository;

    @GetMapping("/abonnements")
    public ResponseEntity<List<Abonnement>> getClients(@RequestParam(value = "page", defaultValue = "0") int page,
                                                       @RequestParam(value = "size", defaultValue = "5") int size,
                                                       @RequestParam(value = "keyword", defaultValue = "") String keyword) {
        Page<Abonnement> list = abonnementRepository.findByKeywordContains(keyword, PageRequest.of(page, size));
        return new ResponseEntity<>(list.getContent(), HttpStatus.OK);
    }

    @DeleteMapping("/abonnements/{id}")
    public ResponseEntity<Void> deleteAbonnement(@PathVariable Long id,
                                                 @RequestParam String keyword,
                                                 @RequestParam int page) {
        abonnementRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT)
                .header("page", String.valueOf(page))
                .header("keyword", keyword)
                .build();
    }

    @PostMapping("/abonnements")
    public ResponseEntity<Void> saveAbonnement(@Valid @RequestBody Abonnement abonnement,
                                               BindingResult bindingResult,
                                               @RequestParam(defaultValue = "") String keyword,
                                               @RequestParam(defaultValue = "0") int page,
                                               @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().build();
        } else {
            abonnementRepository.save(abonnement);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .header("page", String.valueOf(page))
                    .header("keyword", keyword)
                    .header("size", String.valueOf(size))
                    .build();
        }
    }

    @PutMapping("/abonnements/{id}")
    public ResponseEntity<Void> updateAbonnement(@PathVariable Long id,
                                                 @Valid @RequestBody Abonnement abonnement,
                                                 BindingResult bindingResult,
                                                 @RequestParam(defaultValue = "") String keyword,
                                                 @RequestParam(defaultValue = "0") int page,
                                                 @RequestParam(defaultValue = "5") int size) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().build();
        } else {
            abonnement.setId(id);
            abonnementRepository.save(abonnement);
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .header("page", String.valueOf(page))
                    .header("keyword", keyword)
                    .header("size", String.valueOf(size))
                    .build();
        }
    }
}
