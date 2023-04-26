package com.achraf.taffah.jee.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateAbonnement;

    private typeAbonnment typeAbonnement;

    private double solde;

    private double montantMensuel;
    private String keyword;

}

enum typeAbonnment{
    GSM,
    INTERNET,
    TELEPHONE_FIXE
}
