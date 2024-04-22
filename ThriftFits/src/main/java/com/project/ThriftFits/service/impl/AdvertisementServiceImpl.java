package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.DTO.AdvertisementDTO;
import com.project.ThriftFits.model.User;
import com.project.ThriftFits.model.exceptions.InvalidAdIdException;
import com.project.ThriftFits.repository.AdvertisementRepository;
import com.project.ThriftFits.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final UserDetailsService userDetailsService;

    @Override
    public List<Advertisement> getAllAds() {
        return advertisementRepository.findAll();
    }

    @Override
    public Advertisement getAdById(Long id) {
        return advertisementRepository.findById(id).orElseThrow(() -> new InvalidAdIdException(id));
    }

    @Override
    public Advertisement createAd(AdvertisementDTO adDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        User user = (User) userDetailsService.loadUserByUsername(username);

        return advertisementRepository.save(new Advertisement(
                adDTO.getClothingName(),
                adDTO.getClothingType(),
                adDTO.getClothingBrand(),
                adDTO.getClothingSize(),
                adDTO.getClothingColor(),
                adDTO.getDescription(),
                LocalDateTime.now(),
                user
        ));
    }

    @Override
    public Advertisement updateAd(Long id, AdvertisementDTO adDTO) {
        Advertisement advertisement = getAdById(id);

        advertisement.setClothingName(adDTO.getClothingName());
        advertisement.setClothingType(adDTO.getClothingType());
        advertisement.setClothingBrand(adDTO.getClothingBrand());
        advertisement.setClothingSize(adDTO.getClothingSize());
        advertisement.setClothingColor(adDTO.getClothingColor());
        advertisement.setDescription(adDTO.getDescription());

        return advertisementRepository.save(advertisement);
    }

    @Override
    public Advertisement deleteAd(Long id) {
        Advertisement advertisement = getAdById(id);

        advertisementRepository.delete(advertisement);

        return advertisement;
    }

    @Override
    public List<Advertisement> getNewestAds() {
        return advertisementRepository.findTop8ByOrderByCreatedAtDesc();
    }

    @Override
    public List<Advertisement> filtered(String clothingName, String clothingBrand, String clothingType, String clothingSize, String clothingColor) {
        if (clothingName == null && clothingBrand == null && clothingType == null && clothingSize == null && clothingColor == null) {
            return getAllAds();
        }

        return advertisementRepository.findByClothingAttributes(
                clothingName,
                clothingBrand,
                clothingType,
                clothingSize,
                clothingColor
        );
    }

}
