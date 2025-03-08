package com.example.crudpi.service;


import com.example.crudpi.entity.User;
import com.example.crudpi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordResetService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Envoi de l'email pour réinitialiser le mot de passe
    public void sendPasswordResetEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            // Créer le lien de réinitialisation
            String resetLink = "http://localhost:8089/api/users/reset-password?email=" + email;

            // Envoyer l'email
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(user.getEmail());
            message.setSubject("Réinitialisation de votre mot de passe");
            message.setText("Cliquez sur le lien suivant pour réinitialiser votre mot de passe : " + resetLink);
            mailSender.send(message);
        }
    }

    // Réinitialiser le mot de passe
    public void resetPassword(String email, String newPassword) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            user.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(user);
        }
    }
}
