package com.achraf.taffah.jee.security.services;

import com.achraf.taffah.jee.security.entities.AppRole;
import com.achraf.taffah.jee.security.entities.AppUser;
import com.achraf.taffah.jee.security.repositories.AppRoleRepository;
import com.achraf.taffah.jee.security.repositories.AppUserRepository;
import groovy.util.logging.Slf4j;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Slf4j
@AllArgsConstructor
@Transactional
public class SecurityServiceImpl implements SecurityService {

    private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public AppUser saveNewUser(String username, String password, String verifyPassword) {
        if (!password.equals(verifyPassword)) throw new RuntimeException("Passwords not match !");
        String hashedPassword = passwordEncoder.encode(password);
        AppUser appUser = new AppUser();
        appUser.setActive(true);
        appUser.setPassword(hashedPassword);
        appUser.setUsername(username);
        appUser.setId(UUID.randomUUID().toString());
        return appUserRepository.save(appUser);
    }

    @Override
    public AppRole saveNewRole(String roleName, String description) {
        AppRole role = appRoleRepository.findByRoleName(roleName);
        if (role != null) throw new RuntimeException("Role already exists !");
        role = new AppRole();
        role.setRoleName(roleName);
        role.setDescription(description);
        return appRoleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        AppUser user = appUserRepository.findByUsername(username);
        if (user == null) throw new RuntimeException("User ot found !");
        AppRole role = appRoleRepository.findByRoleName(roleName);
        if (role == null) throw new RuntimeException("Role not found !");
        user.getRoles().add(role);
    }

    @Override
    public void removeRoleFromUser(String username, String roleName) {
        AppUser user = appUserRepository.findByUsername(username);
        if (user == null) throw new RuntimeException("User not found !");
        AppRole role = appRoleRepository.findByRoleName(roleName);
        if (role == null) throw new RuntimeException("Role not found !");
        user.getRoles().remove(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }
}
