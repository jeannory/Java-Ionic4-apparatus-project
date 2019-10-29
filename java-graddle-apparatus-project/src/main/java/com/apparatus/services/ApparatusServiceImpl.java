package com.apparatus.services;

import com.apparatus.dtos.ApparatusDTO;
import com.apparatus.entities.Apparatus;
import com.apparatus.repositories.ApparatusRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ApparatusServiceImpl implements IApparatusService{

    private ModelMapper modelMapper;

    @PostConstruct
    private void init(){
        modelMapper = new ModelMapper();
    }

    @Autowired
    private ApparatusRepository apparatusRepository;

    @Override
    public void getDataset() {
        Apparatus apparatus1 = new Apparatus();
        apparatus1.setName("Frigo");
        apparatus1.setDescription(Arrays.asList("Contenance : 100 litres", "Catégorie consommation: A"));

        apparatusRepository.save(apparatus1);

        Apparatus apparatus2 = new Apparatus();
        apparatus2.setName("Télévision");
        apparatus2.setDescription(Arrays.asList("Ecran 165 pouces", "Catégorie consommation: B"));

        apparatusRepository.save(apparatus2);

        Apparatus apparatus3 = new Apparatus();
        apparatus3.setName("PC gamer");
        apparatus3.setDescription(Arrays.asList("Ordinateur portable 17 pouces", "Catégorie consommation: F"));

        apparatusRepository.save(apparatus3);
    }

    @Override
    public List<ApparatusDTO> findAllApparatusDTO(){
        List<Apparatus> apparatuses = apparatusRepository.findAll();
        List<ApparatusDTO> apparatusDTOS =
                apparatuses.stream().map(apparatus -> modelMapper.map(apparatus, ApparatusDTO.class))
                        .collect(Collectors.toList());
        return apparatusDTOS;
    }
}
