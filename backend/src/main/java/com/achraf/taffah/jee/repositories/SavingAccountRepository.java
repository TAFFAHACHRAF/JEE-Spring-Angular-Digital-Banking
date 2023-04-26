package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.SavingAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingAccountRepository extends JpaRepository<SavingAccount,Long> {
}
