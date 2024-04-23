package com.project.ThriftFits.web;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class PageController {

    private final AdvertisementService advertisementService;

    @GetMapping({"/", "/home"})
    public List<Advertisement> home() {
        return advertisementService.getNewestAds();
    }

    @GetMapping("/about")
    public ResponseEntity<Void> about() {
        return ResponseEntity.ok().build();
    }
}
