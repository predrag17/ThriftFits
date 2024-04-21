package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.Favourite;
import com.project.ThriftFits.model.User;
import com.project.ThriftFits.model.exceptions.InvalidFavouriteIdException;
import com.project.ThriftFits.repository.AdvertisementRepository;
import com.project.ThriftFits.repository.FavouriteRepository;
import com.project.ThriftFits.service.AdvertisementService;
import com.project.ThriftFits.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class FavouriteServiceImpl implements FavouriteService {

    private final FavouriteRepository favouriteRepository;
    private final AdvertisementService advertisementService;
    private final AdvertisementRepository advertisementRepository;

    @Override
    public void addAdToFavourite(Long adId, User user) {
        Advertisement advertisement = advertisementService.getAdById(adId);

        Favourite favourite = favouriteRepository
                .findById(user.getFavourite().getId())
                .orElseThrow(InvalidFavouriteIdException::new);

        favourite.getAdvertisements().add(advertisement);

        favouriteRepository.save(favourite);
    }

    @Override
    public List<Advertisement> getAllAdsFromFavourite(User user) {
        Favourite favourite = favouriteRepository
                .findById(user.getFavourite().getId())
                .orElseThrow(InvalidFavouriteIdException::new);

        return favourite.getAdvertisements();
    }
}
