package com.project.ThriftFits.web;

import com.project.ThriftFits.model.Image;
import com.project.ThriftFits.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/img")
public class ImageController {

    private final ImageService imageService;

    @GetMapping("{id}/details")
    public ResponseEntity<Image> getImageById(@PathVariable Long id) {
        return ResponseEntity.ok(imageService.getImageById(id));
    }
}
