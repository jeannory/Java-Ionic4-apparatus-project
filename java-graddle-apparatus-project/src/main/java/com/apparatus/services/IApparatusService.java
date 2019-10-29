package com.apparatus.services;

import com.apparatus.dtos.ApparatusDTO;

import java.util.List;

public interface IApparatusService {

    void getDataset();

    List<ApparatusDTO> findAllApparatusDTO();

    List<ApparatusDTO> setApparatus(ApparatusDTO apparatusDTO);
}
