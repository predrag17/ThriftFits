package com.project.ThriftFits.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

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
    private String clothingSize;

    @NotBlank
    private String clothingBrand;

    @NotBlank
    private String clothingColor;

    private String description;

    private LocalDate createdAt;

    @ManyToOne
    private User user;

    @ManyToOne
    private Favourite favourite;

    public Advertisement(String clothingName, String clothingSize, String clothingBrand, String clothingColor, String description, LocalDate createdAt, User user) {
        this.clothingName = clothingName;
        this.clothingSize = clothingSize;
        this.clothingBrand = clothingBrand;
        this.clothingColor = clothingColor;
        this.description = description;
        this.createdAt = createdAt;
        this.user = user;
    }
}
