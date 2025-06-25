package com.example.task_backend.services;

import com.example.task_backend.entities.User;
import com.example.task_backend.repositories.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
//@RequiredArgsConstructor
public class CustomOAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public CustomOAuth2SuccessHandler(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        System.out.println("onAuthenticationSuccess");
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        // Récupère l'email à partir des infos de l'utilisateur OAuth2
        String email = oAuth2User.getAttribute("email");

        // Trouve l'utilisateur existant avec cet email (doit exister en DB)
        User user = userRepository.findByUsername(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur avec email " + email + " non trouvé"));

        // Génère un JWT
        String jwtToken = jwtService.generateToken(user);
        System.out.println("jwt token"+ jwtToken);
        // Redirige vers le frontend avec le token dans l'URL
        response.sendRedirect("http://localhost:5173/oauth2/redirect?token=" + jwtToken);
    }
}
