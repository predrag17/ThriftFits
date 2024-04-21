package com.project.ThriftFits.web;


import com.project.ThriftFits.model.Advertisement;
import com.project.ThriftFits.model.DTO.AdvertisementDTO;
import com.project.ThriftFits.service.AdvertisementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/ads")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

}
