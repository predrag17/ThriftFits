package com.project.ThriftFits.service;

import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.User;

import java.util.List;

public interface FavouriteService {

    void addAdToFavourite(Long adId, User user);

    List<Advertisement> getAllAdsFromFavourite(User user);

}
