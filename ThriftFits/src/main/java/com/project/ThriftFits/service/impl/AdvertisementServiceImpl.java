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

import java.time.LocalDate;
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
                adDTO.getClothingSize(),
                adDTO.getClothingBrand(),
                adDTO.getClothingColor(),
                adDTO.getDescription(),
                LocalDate.now(),
                user
        ));
    }

    @Override
    public Advertisement updateAd(Long id, AdvertisementDTO adDTO) {
        Advertisement advertisement = getAdById(id);

        advertisement.setClothingName(adDTO.getClothingName());
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
}
