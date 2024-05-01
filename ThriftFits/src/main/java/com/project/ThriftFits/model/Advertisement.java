package com.project.ThriftFits.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "ads")
public class Advertisement {

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    private String clothingName;

    @NotBlank
    private String clothingType;

    @NotBlank
    private String clothingBrand;

    private String clothingSize;

    @NotBlank
    private String clothingColor;

    private String description;

    @Lob
    private byte[] imageData;

    private LocalDateTime createdAt;

    @ManyToOne
    @JsonBackReference
    private User user;

    @ManyToMany
    @JoinTable(
            name = "favourite_ads",
            joinColumns = @JoinColumn(name = "favourite_id"),
            inverseJoinColumns = @JoinColumn(name = "ad_id")
    )
    private List<Favourite> favourites;

    public Advertisement(String clothingName, String clothingType, String clothingBrand, String clothingSize, String clothingColor, String description, LocalDateTime createdAt, User user) {
        this.clothingName = clothingName;
        this.clothingType = clothingType;
        this.clothingBrand = clothingBrand;
        this.clothingSize = clothingSize;
        this.clothingColor = clothingColor;
        this.description = description;
        this.createdAt = createdAt;
        this.user = user;
    }
}
