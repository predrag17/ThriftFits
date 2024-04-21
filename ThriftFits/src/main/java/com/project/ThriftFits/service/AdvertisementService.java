package com.project.ThriftFits.service;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.DTO.AdvertisementDTO;

import java.util.List;

public interface AdvertisementService {

    List<Advertisement> getAllAds();

    Advertisement getAdById(Long id);

    Advertisement createAd(AdvertisementDTO adDTO);

    Advertisement updateAd(Long id, AdvertisementDTO adDTO);

    Advertisement deleteAd(Long id);
}
