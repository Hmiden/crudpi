package com.example.crudpi.service;

import com.example.crudpi.entity.User;
import com.example.crudpi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Récupère tous les utilisateurs.
     * @return Une liste de tous les utilisateurs.
     */
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    /**
     * Récupère un utilisateur par son ID.
     * @param id L'ID de l'utilisateur.
     * @return L'utilisateur correspondant à l'ID.
     */
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    /**
     * Sauvegarde un utilisateur.
     * @param user L'utilisateur à sauvegarder.
     * @return L'utilisateur sauvegardé.
     */
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    /**
     * Met à jour un utilisateur existant.
     * @param id L'ID de l'utilisateur à mettre à jour.
     * @param newUser Les nouvelles données de l'utilisateur.
     * @return L'utilisateur mis à jour.
     * @throws ResponseStatusException Si l'utilisateur n'est pas trouvé.
     */
    public User updateUser(Long id, User newUser) {
        return userRepository.findById(id)
                .map(user -> {
                    if (newUser.getFirstName() != null) user.setFirstName(newUser.getFirstName());
                    if (newUser.getLastName() != null) user.setLastName(newUser.getLastName());
                    if (newUser.getEmail() != null) user.setEmail(newUser.getEmail());
                    if (newUser.getPassword() != null) user.setPassword(newUser.getPassword());
                    if (newUser.getnTel() != null) user.setnTel(newUser.getnTel());
                    if (newUser.getNumPasseport() != null) user.setNumPasseport(newUser.getNumPasseport());
                    if (newUser.getRole() != null) user.setRole(newUser.getRole());
                    return userRepository.save(user);
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur avec ID " + id + " non trouvé !"));
    }

    /**
     * Supprime un utilisateur par son ID.
     * @param id L'ID de l'utilisateur à supprimer.
     * @throws ResponseStatusException Si l'utilisateur n'est pas trouvé.
     */
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur avec ID " + id + " non trouvé !");
        }
        userRepository.deleteById(id);
    }
}