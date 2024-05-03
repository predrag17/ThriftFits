package com.project.ThriftFits.web;

import com.project.ThriftFits.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/fave")
public class FavouriteController {

    private final FavouriteService favouriteService;

    
}
