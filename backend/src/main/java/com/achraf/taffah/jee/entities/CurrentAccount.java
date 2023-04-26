package com.achraf.taffah.jee.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@DiscriminatorValue("CA")
@Data
@NoArgsConstructor @AllArgsConstructor
public class CurrentAccount extends BankAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private double overDraft;
}
