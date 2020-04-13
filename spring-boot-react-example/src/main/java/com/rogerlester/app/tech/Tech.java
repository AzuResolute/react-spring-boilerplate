package com.rogerlester.app.tech;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tech_tbl")
public class Tech {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private String layer;
    private String language;

    public Tech() {}

    public Tech(String name, String description, String layer, String language) {
        this.name = name;
        this.description = description;
        this.layer = layer;
        this.language = language;
    }
}
