package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.Abonnement;
import com.achraf.taffah.jee.entities.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AbonnementRepository extends JpaRepository<Abonnement,Long> {
    Page<Abonnement> findByKeywordContains(String keyword, Pageable pageable);
}
