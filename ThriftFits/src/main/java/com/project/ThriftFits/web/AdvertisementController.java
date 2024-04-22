package com.project.ThriftFits.web;


import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.DTO.AdvertisementDTO;
import com.project.ThriftFits.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/ads")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @GetMapping
    public List<Advertisement> listAllAds() {
        return advertisementService.getAllAds();
    }

    @PostMapping("/add")
    public Advertisement createAd(@RequestBody AdvertisementDTO adDTO) {
        return advertisementService.createAd(adDTO);
    }

    @PutMapping("{id}/edit")
    public Advertisement updateAd(@PathVariable Long id, @RequestBody AdvertisementDTO advertisementDTO) {
        return advertisementService.updateAd(id, advertisementDTO);
    }

    @DeleteMapping("{id}/delete")
    public Advertisement deleteAd(@PathVariable Long id) {
        return advertisementService.deleteAd(id);
    }

    @PostMapping("{id}/details")
    public Advertisement detailsAd(@PathVariable Long id) {
        return advertisementService.getAdById(id);
    }

    @PostMapping("/filtered")
    public List<Advertisement> filterAds(
            @RequestParam(required = false) String clothingName,
            @RequestParam(required = false) String clothingBrand,
            @RequestParam(required = false) String clothingType,
            @RequestParam(required = false) String clothingSize,
            @RequestParam(required = false) String clothingColor
    ) {
        return advertisementService.filtered(clothingName, clothingBrand, clothingType, clothingSize, clothingColor);
    }

}
