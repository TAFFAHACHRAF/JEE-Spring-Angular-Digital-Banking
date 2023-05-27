package taffah.achraf.ebankingbackend.web;

import org.springframework.security.access.prepost.PreAuthorize;
import taffah.achraf.ebankingbackend.dtos.*;
import taffah.achraf.ebankingbackend.exceptions.BalanceNotSufficientException;
import taffah.achraf.ebankingbackend.exceptions.BankAccountNotFoundException;
import org.springframework.web.bind.annotation.*;
import taffah.achraf.ebankingbackend.services.BankAccountServiceImpl;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class BankAccountRestAPI {
    private BankAccountServiceImpl bankAccountService;

    public BankAccountRestAPI(BankAccountServiceImpl bankAccountService) {
        this.bankAccountService = bankAccountService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/accounts/{accountId}")
    public BankAccountDTO getBankAccount(@PathVariable String accountId) throws BankAccountNotFoundException {
        return bankAccountService.getBankAccount(accountId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/accounts")
    public List<BankAccountDTO> listAccounts(){
        return bankAccountService.bankAccountList();
    }

    @GetMapping("/accounts/{accountId}/operations")
    public List<AccountOperationDTO> getHistory(@PathVariable String accountId){
        return bankAccountService.accountHistory(accountId);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/accounts/{accountId}/pageOperations")
    public AccountHistoryDTO getAccountHistory(
            @PathVariable String accountId,
            @RequestParam(name="page",defaultValue = "0") int page,
            @RequestParam(name="size",defaultValue = "5")int size) throws BankAccountNotFoundException {
        return bankAccountService.getAccountHistory(accountId,page,size);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/accounts/debit")
    public DebitDTO debit(@RequestBody DebitDTO debitDTO) throws BankAccountNotFoundException, BalanceNotSufficientException {
        this.bankAccountService.debit(debitDTO.getAccountId(),debitDTO.getAmount(),debitDTO.getDescription());
        return debitDTO;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/accounts/credit")
    public CreditDTO credit(@RequestBody CreditDTO creditDTO) throws BankAccountNotFoundException {
        this.bankAccountService.credit(creditDTO.getAccountId(),creditDTO.getAmount(),creditDTO.getDescription());
        return creditDTO;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/accounts/transfer")
    public void transfer(@RequestBody TransferRequestDTO transferRequestDTO) throws BankAccountNotFoundException, BalanceNotSufficientException {
        this.bankAccountService.transfer(
                transferRequestDTO.getAccountSource(),
                transferRequestDTO.getAccountDestination(),
                transferRequestDTO.getAmount());
    }
}
