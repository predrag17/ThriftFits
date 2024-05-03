package com.project.ThriftFits.web;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.User;
import com.project.ThriftFits.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/fave")
public class FavouriteController {

    private final FavouriteService favouriteService;
    private final UserDetailsService userDetailsService;

    @PostMapping("/{id}/add")
    public ResponseEntity<Advertisement> addAdToFavourite(@PathVariable Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        User user = (User) userDetailsService.loadUserByUsername(username);
        return ResponseEntity.ok(favouriteService.addAdToFavourite(id, user));
    }
}
