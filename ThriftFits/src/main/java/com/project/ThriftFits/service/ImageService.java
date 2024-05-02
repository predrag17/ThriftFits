package com.project.ThriftFits.service;

import org.springframework.core.io.Resource;

public interface ImageService {

    Resource getImageById(Long id);
}
