package com.achraf.taffah.jee;

import com.achraf.taffah.jee.security.services.SecurityService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class webAppilcation {

    public static void main(String[] args) {
        SpringApplication.run(webAppilcation.class, args);
    }

    @Bean
    CommandLineRunner saveUsers(SecurityService securityService) {
        return args -> {
            securityService.saveNewUser("yassine", "12345", "12345");
            securityService.saveNewUser("admin", "12345", "12345");
            securityService.saveNewUser("omar", "12345", "12345");
            securityService.saveNewUser("hafsa", "12345", "12345");
            securityService.saveNewUser("haitham", "12345", "12345");
            securityService.saveNewUser("user", "12345", "12345");
            securityService.saveNewUser("achraf", "12345", "12345");

            securityService.saveNewRole("CLIENT", "user");
            securityService.saveNewRole("ADMIN", "admin");

            securityService.addRoleToUser("user", "USER");
            securityService.addRoleToUser("achraf", "ADMIN");
        };
    }

}
