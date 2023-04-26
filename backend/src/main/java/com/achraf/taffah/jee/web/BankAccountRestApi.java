package com.achraf.taffah.jee.web;

import com.achraf.taffah.jee.entities.BankAccount;
import com.achraf.taffah.jee.repositories.BankAccountRepository;
import com.achraf.taffah.jee.services.BankService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@AllArgsConstructor
public class BankAccountRestApi {
    private BankAccountRepository bankAccountRepository;

    @GetMapping("/accounts")
    public List<BankAccount> lisAccounts(){
        return bankAccountRepository.findAll();
    }
}
