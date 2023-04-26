package com.achraf.taffah.jee.services;

import com.achraf.taffah.jee.entities.BankAccount;
import com.achraf.taffah.jee.repositories.BankAccountRepository;

import java.util.List;

public class BankService {
    public List<BankAccount> bankServices(){
        BankAccountRepository bankAccountRepository = null;
        return bankAccountRepository.findAll();
    }
}
