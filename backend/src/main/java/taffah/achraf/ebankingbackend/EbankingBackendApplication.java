package taffah.achraf.ebankingbackend;

import taffah.achraf.ebankingbackend.dtos.BankAccountDTO;
import taffah.achraf.ebankingbackend.dtos.CurrentBankAccountDTO;
import taffah.achraf.ebankingbackend.dtos.CustomerDTO;
import taffah.achraf.ebankingbackend.dtos.SavingBankAccountDTO;
import taffah.achraf.ebankingbackend.entities.ERole;
import taffah.achraf.ebankingbackend.entities.Role;
import taffah.achraf.ebankingbackend.entities.User;
import taffah.achraf.ebankingbackend.exceptions.CustomerNotFoundException;
import taffah.achraf.ebankingbackend.repositories.*;
import taffah.achraf.ebankingbackend.services.BankAccountService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.*;
import java.util.stream.Stream;

@SpringBootApplication
public class EbankingBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EbankingBackendApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(BankAccountService bankAccountService){
        return args -> {
           Stream.of("Hassan","Imane","Mohamed").forEach(name->{
               CustomerDTO customer=new CustomerDTO();
               customer.setName(name);
               customer.setEmail(name+"@gmail.com");
               bankAccountService.saveCustomer(customer);
           });
           bankAccountService.listCustomers().forEach(customer->{
               try {
                   bankAccountService.saveCurrentBankAccount(Math.random()*90000,9000,customer.getId());
                   bankAccountService.saveSavingBankAccount(Math.random()*120000,5.5,customer.getId());

               } catch (CustomerNotFoundException e) {
                   e.printStackTrace();
               }
           });
            List<BankAccountDTO> bankAccounts = bankAccountService.bankAccountList();
            for (BankAccountDTO bankAccount:bankAccounts){
                for (int i = 0; i <10 ; i++) {
                    String accountId;
                    if(bankAccount instanceof SavingBankAccountDTO){
                        accountId=((SavingBankAccountDTO) bankAccount).getId();
                    } else{
                        accountId=((CurrentBankAccountDTO) bankAccount).getId();
                    }
                    bankAccountService.credit(accountId,10000+Math.random()*120000,"Credit");
                    bankAccountService.debit(accountId,1000+Math.random()*9000,"Debit");
                }
            }
        };
    }
    @Bean
    CommandLineRunner start(CustomerRepository customerRepository,
                            BankAccountRepository bankAccountRepository,
                            AccountOperationRepository accountOperationRepository,
                            RoleRepository roleRepository,
                            UserRepository userRepository){
        return args -> {
            Role role = new Role();
            role.setName(ERole.ROLE_ADMIN);
            roleRepository.save(role);

            Set<Role> roles = new HashSet<>();
            roles.add(role);

            User user = new User();
            user.setEmail("walo@gmail.com");
            user.setUsername("walo@gmail.com");
            user.setRoles(roles);

            String password = "walo@gmail.com";
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            String encodedPassword = encoder.encode(password);

            user.setPassword(encodedPassword);

            userRepository.save(user);
        };

    }

}
