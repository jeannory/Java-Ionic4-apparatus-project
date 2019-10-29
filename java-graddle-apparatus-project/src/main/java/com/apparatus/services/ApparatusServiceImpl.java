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
import java.util.Optional;
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
        final Apparatus apparatus1 = new Apparatus();
        apparatus1.setName("Frigo");
        apparatus1.setDescription(Arrays.asList("Contenance : 100 litres", "Catégorie consommation: A"));
        apparatus1.setLight(true);

        apparatusRepository.save(apparatus1);

        final Apparatus apparatus2 = new Apparatus();
        apparatus2.setName("Télévision");
        apparatus2.setDescription(Arrays.asList("Ecran 165 pouces", "Catégorie consommation: B"));
        apparatus2.setLight(false);

        apparatusRepository.save(apparatus2);

        final Apparatus apparatus3 = new Apparatus();
        apparatus3.setName("PC gamer");
        apparatus3.setDescription(Arrays.asList("Ordinateur portable 17 pouces", "Catégorie consommation: F"));
        apparatus3.setLight(true);

        apparatusRepository.save(apparatus3);
    }

    @Override
    public List<ApparatusDTO> findAllApparatusDTO(){
        final List<Apparatus> apparatuses = apparatusRepository.findAll();
        final List<ApparatusDTO> apparatusDTOS =
                apparatuses.stream().map(apparatus -> modelMapper.map(apparatus, ApparatusDTO.class))
                        .collect(Collectors.toList());
        return apparatusDTOS;
    }

    @Override
    public List<ApparatusDTO> setApparatus(final ApparatusDTO apparatusDTO){
        final Optional<Apparatus> apparatus = apparatusRepository.findById(apparatusDTO.getId());
        if(apparatusDTO.getName()!=null){
            apparatus.get().setName(apparatusDTO.getName());
        }
        if(apparatusDTO.getDescription()!=null){
            apparatus.get().setDescription(apparatusDTO.getDescription());
        }
        if(apparatusDTO.isLight()!=null){
            apparatus.get().setLight(apparatusDTO.isLight());
        }
        apparatusRepository.save(apparatus.get());
        return findAllApparatusDTO();
    }
}
