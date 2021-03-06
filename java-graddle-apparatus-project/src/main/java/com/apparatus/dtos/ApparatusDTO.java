package com.apparatus.dtos;

import java.util.List;

public class ApparatusDTO {

    private int id;
    private String name;
    private List<String> description;
    private Boolean light;

    public ApparatusDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getDescription() {
        return description;
    }

    public void setDescription(List<String> description) {
        this.description = description;
    }

    public Boolean isLight() {
        return light;
    }

    public void setLight(Boolean light) {
        this.light = light;
    }
}
