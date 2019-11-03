package com.apparatus.services;

import com.apparatus.dtos.ApparatusDTO;

import java.util.List;

public interface IApparatusService {

    void getDataset();

    List<ApparatusDTO> findAllApparatusDTO();

    List<ApparatusDTO> setApparatus(final ApparatusDTO apparatusDTO);

    ApparatusDTO addApparatus(final ApparatusDTO apparatusDTO);
}
