package ebankingbackend.repositories;

import ebankingbackend.entities.BankAccount;
import ebankingbackend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
}
