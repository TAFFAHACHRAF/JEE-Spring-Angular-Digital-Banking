package taffah.achraf.ebankingbackend.repositories;

import taffah.achraf.ebankingbackend.entities.ERole;
import taffah.achraf.ebankingbackend.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
