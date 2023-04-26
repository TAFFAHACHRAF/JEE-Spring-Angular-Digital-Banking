package com.achraf.taffah.jee.rest_controllers;

import com.achraf.taffah.jee.entities.Client;
import com.achraf.taffah.jee.repositories.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@AllArgsConstructor
@RestController
@RequestMapping("/api/clients")
public class ClientRestController {
    private ClientRepository clientRepository;

    @GetMapping
    public Page<Client> getClients(@RequestParam(value = "page", defaultValue = "0") int page,
                                   @RequestParam(value = "size", defaultValue = "5") int size,
                                   @RequestParam(value = "keyword", defaultValue = "") String keyword) {
        return clientRepository.findByNomContains(keyword, PageRequest.of(page, size));
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id) {
        clientRepository.deleteById(id);
    }

    @PostMapping
    public Client saveClient(@Valid @RequestBody Client client) {
        return clientRepository.save(client);
    }

    @PutMapping("/{id}")
    public Client updateClient(@Valid @RequestBody Client client, @PathVariable Long id) {
        if (!clientRepository.existsById(id)) {
            throw new RuntimeException("Client does not exist !");
        }
        client.setId(id);
        return clientRepository.save(client);
    }
}
