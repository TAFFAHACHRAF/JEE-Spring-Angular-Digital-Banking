package taffah.achraf.ebankingbackend.dtos;

import lombok.Data;
import taffah.achraf.ebankingbackend.enums.OperationType;

import java.util.Date;

@Data
public class AccountOperationDTO {
    private Long id;
    private Date operationDate;
    private double amount;
    private OperationType type;
    private String description;
}

