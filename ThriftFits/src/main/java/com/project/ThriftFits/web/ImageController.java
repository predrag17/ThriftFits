package com.project.ThriftFits.web;

import com.project.ThriftFits.model.Image;
import com.project.ThriftFits.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/img")
public class ImageController {

    private final ImageService imageService;

    @GetMapping("{id}/details")
    public ResponseEntity<Resource> getImageById(@PathVariable Long id) {
        Resource resource = imageService.getImageById(id);

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(resource);
    }
}
