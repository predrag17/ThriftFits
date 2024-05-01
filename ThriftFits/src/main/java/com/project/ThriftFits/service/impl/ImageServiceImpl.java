package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.model.Image;
import com.project.ThriftFits.model.exceptions.InvalidImageIdException;
import com.project.ThriftFits.repository.ImageRepository;
import com.project.ThriftFits.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    public Image getImageById(Long id) {
        return imageRepository.findById(id).orElseThrow(() -> new InvalidImageIdException("Image with this id does not exist!"));
    }
}
