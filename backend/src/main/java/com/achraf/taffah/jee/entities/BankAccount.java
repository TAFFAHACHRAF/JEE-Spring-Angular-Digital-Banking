package com.achraf.taffah.jee.entities;

import com.achraf.taffah.jee.enums.AccountStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity // Ajout de l'annotation Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private double balance;
    private Date createAt;
    @Enumerated(EnumType.STRING)
    private AccountStatus status;
    @ManyToOne // Correction de l'annotation de la relation Customer - BankAccount
    private Customer customer;

    @OneToMany(mappedBy = "bankAccount", fetch = FetchType.LAZY) // Correction du nom de l'attribut mappedBy
    private List<AccountOperation> accountOperations;
}
