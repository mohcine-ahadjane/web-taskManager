package com.example.task_backend.services;

import com.example.task_backend.entities.User;
import com.example.task_backend.repositories.UserRepository;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;

    public CustomOAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) {
        OAuth2User user = super.loadUser(request);
        String email = user.getAttribute("email");
        if (email != null) {
            userRepository.findByUsername(email).orElseGet(() -> {
                User newUser = new User();
                newUser.setUsername(email);
                newUser.setPassword("");
                return userRepository.save(newUser);
            });
        }
        return user;
    }
}

