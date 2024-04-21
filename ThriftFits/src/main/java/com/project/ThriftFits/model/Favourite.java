package com.project.ThriftFits.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "favourite")
public class Favourite {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany(mappedBy = "favourites")
    private List<Advertisement> advertisements;

    private int quantity;

    public Favourite(int quantity) {
        this.quantity = 0;
    }
}
