package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.repository.FavouriteRepository;
import com.project.ThriftFits.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class FavouriteServiceImpl implements FavouriteService {

    private final FavouriteRepository favouriteRepository;
}
