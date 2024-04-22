package com.project.ThriftFits.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "favourite")
public class Favourite {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToMany(mappedBy = "favourites")
    private List<Advertisement> advertisements;

    private int quantity;

    public Favourite() {
        this.quantity = 0;
    }

    @Override
    public String toString() {
        return "Favourite{" +
                "id=" + id +
                ", quantity=" + quantity +
                '}';
    }
}
