package com.project.ThriftFits.auth.service;

import com.project.ThriftFits.auth.model.AuthenticationResponse;
import com.project.ThriftFits.model.DTO.AuthenticationRequest;
import com.project.ThriftFits.model.DTO.RegisterRequest;
import com.project.ThriftFits.model.Favourite;
import com.project.ThriftFits.model.User;
import com.project.ThriftFits.model.enumeration.Role;
import com.project.ThriftFits.model.exceptions.UserAlreadyExistException;
import com.project.ThriftFits.repository.UserRepository;
import com.project.ThriftFits.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;

    public AuthenticationResponse register(RegisterRequest request) {
        User alreadyExist = (User) userDetailsService.loadUserByUsername(request.getUsername());

        if (alreadyExist != null) {
            throw new UserAlreadyExistException("User with that username already exist");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .instagramUsername(request.getInstagramUsername())
                .phone(request.getPhone())
                .email(request.getEmail())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .favourite(new Favourite())
                .build();

        userRepository.save(user);

        String jwtToken = jwtService.generateJwtToken(user);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();

        String jwtToken = jwtService.generateJwtToken(user);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .build();
    }
}