package com.project.ThriftFits.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdvertisementDTO {

    private String clothingName;
    private String clothingType;
    private String clothingBrand;
    private String clothingSize;
    private String clothingColor;
    private String description;

}
