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

    @OneToMany(mappedBy = "favourite")
    private List<Advertisement> advertisements;
}
