package com.project.ThriftFits.service.impl;

import com.project.ThriftFits.model.Image;
import com.project.ThriftFits.model.exceptions.InvalidImageIdException;
import com.project.ThriftFits.repository.ImageRepository;
import com.project.ThriftFits.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    public Resource getImageById(Long id) {
        Image image = imageRepository.findById(id).orElseThrow(() -> new InvalidImageIdException("Image with this id does not exist!"));
        Path imagePath = Paths.get(image.getPath());

        return new FileSystemResource(imagePath);
    }
}
