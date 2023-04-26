package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,Long> {
}
