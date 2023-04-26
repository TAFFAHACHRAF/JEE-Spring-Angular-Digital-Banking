package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.CurrentAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrentAccountRepository extends JpaRepository<CurrentAccount,Long> {
}
