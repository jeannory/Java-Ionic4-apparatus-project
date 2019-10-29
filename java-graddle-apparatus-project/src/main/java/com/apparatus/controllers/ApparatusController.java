package com.apparatus.controllers;

import com.apparatus.dtos.ApparatusDTO;
import com.apparatus.services.IApparatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Validated
@RestController
@RequestMapping("/api/v1/apparatus")
public class ApparatusController {

    @Autowired
    private IApparatusService apparatusService;

    //http://127.0.0.1:8080/api/v1/apparatus/getDataset
    @GetMapping(value = "/getDataset")
    public String getDataset(){
        apparatusService.getDataset();
        return "success";
    }

    //http://127.0.0.1:8080/api/v1/apparatus/getApparatuses
    @GetMapping(value = "/getApparatuses")
    public List<ApparatusDTO> getApparatuses(){
        return apparatusService.findAllApparatusDTO();
    }

    //http://127.0.0.1:8080/api/v1/apparatus/setApparatus
    @PutMapping(value = "/setApparatus")
    public List<ApparatusDTO> setApparatus(@RequestBody final ApparatusDTO apparatusDTO){
        return apparatusService.setApparatus(apparatusDTO);
    }
}
