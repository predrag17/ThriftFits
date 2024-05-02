package com.project.ThriftFits.web;


import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.DTO.AdvertisementDTO;
import com.project.ThriftFits.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ads")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @GetMapping
    public ResponseEntity<List<Advertisement>> listAllAds() {
        return ResponseEntity.ok(advertisementService.getAllAds());
    }

    @PostMapping("/add")
    public ResponseEntity<Advertisement> createAd(
            @RequestParam("clothingName") String clothingName,
            @RequestParam("clothingBrand") String clothingBrand,
            @RequestParam("clothingType") String clothingType,
            @RequestParam(value = "clothingSize", required = false) String clothingSize,
            @RequestParam("clothingColor") String clothingColor,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam("image") MultipartFile image
    ) throws IOException {


        return ResponseEntity.ok(advertisementService.create(
                clothingName,
                clothingBrand,
                clothingType,
                clothingSize,
                clothingColor,
                description,
                image
        ));
    }

    @PutMapping("{id}/edit")
    public ResponseEntity<Advertisement> updateAd(@PathVariable Long id, @RequestBody AdvertisementDTO advertisementDTO) {
        return ResponseEntity.ok(advertisementService.updateAd(id, advertisementDTO));
    }

    @DeleteMapping("{id}/delete")
    public ResponseEntity<Advertisement> deleteAd(@PathVariable Long id) {
        return ResponseEntity.ok(advertisementService.deleteAd(id));
    }

    @GetMapping("{id}/details")
    public ResponseEntity<Advertisement> detailsAd(@PathVariable Long id) {
        return ResponseEntity.ok(advertisementService.getAdById(id));
    }

    @GetMapping("/newest")
    public ResponseEntity<List<Advertisement>> getNewestAds() {
        return ResponseEntity.ok(advertisementService.getNewestAds());
    }

    @PostMapping("/filtered")
    public ResponseEntity<List<Advertisement>> filterAds(
            @RequestParam(required = false) String clothingName,
            @RequestParam(required = false) String clothingBrand,
            @RequestParam(required = false) String clothingType,
            @RequestParam(required = false) String clothingSize,
            @RequestParam(required = false) String clothingColor
    ) {
        return ResponseEntity.ok(
                advertisementService.filtered(
                        clothingName,
                        clothingBrand,
                        clothingType,
                        clothingSize,
                        clothingColor));
    }

    @PostMapping("/sorted")
    public ResponseEntity<List<Advertisement>> sortAds(@RequestParam String sortOption) {
        return ResponseEntity.ok(advertisementService.sortAds(sortOption));
    }

    @GetMapping("/myAds")
    public ResponseEntity<List<Advertisement>> getMyAds() {
        return ResponseEntity.ok(advertisementService.loggedInUserAds());
    }
}
