package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client,Long> {
    Page<Client> findByNomContains(String keyword, Pageable pageable);
}
