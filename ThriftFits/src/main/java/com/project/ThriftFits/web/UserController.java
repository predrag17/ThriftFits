package com.project.ThriftFits.web;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @GetMapping("/{username}")
    public List<Advertisement> getAllAdsFromUser(@PathVariable String username) {
        return userService.getAdsFromUser(username);
    }

}
