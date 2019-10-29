package com.apparatus.controllers;

import com.apparatus.dtos.ApparatusDTO;
import com.apparatus.entities.Apparatus;
import com.apparatus.repositories.ApparatusRepository;
import com.apparatus.services.IApparatusService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Optional;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class ApparatusControllerTest {

    @Autowired
    private ApparatusRepository apparatusRepository;
    @Autowired
    private IApparatusService apparatusService;
    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void getDataset() {
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD)
    @Test
    public void getApparatuses() throws Exception {
        //given
        apparatusService.getDataset();

        //when && then
        final MvcResult mvcResult = invokeGetApparatuses()
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Frigo")))
                .andReturn();
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD)
    @Test
    public void setApparatus() throws Exception{
        //given
        apparatusService.getDataset();
        final Optional<Apparatus> apparatus1 = apparatusRepository.findById(1);
        Assert.assertEquals("Frigo", apparatus1.get().getName());

        final ApparatusDTO apparatusDTO = new ApparatusDTO();
        apparatusDTO.setId(1);
        apparatusDTO.setName("Frigo cassé");


        //when && then
        final MvcResult mvcResult = invokeSetApparatus(apparatusDTO)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andReturn();

        final Apparatus[] apparatuses = fromJsonResult(mvcResult, Apparatus[].class);
        boolean happen = false;
        for(int i=0;i<apparatuses.length;i++){
            if(apparatuses[i].getId()==1){
                Assert.assertEquals(apparatuses[i].getName(), "Frigo cassé");
                happen = true;
            }
        }
        Assert.assertTrue(happen);
    }

    private ResultActions invokeGetApparatuses() throws Exception{
        return mockMvc.perform(get("http://127.0.0.1:8080/api/v1/apparatus/getApparatuses"));
    }

    private ResultActions invokeSetApparatus(final ApparatusDTO apparatusDTO) throws Exception{
        return mockMvc.perform(put("http://127.0.0.1:8080/api/v1/apparatus/setApparatus")
                .content(asJsonString(apparatusDTO))
                .contentType(MediaType.APPLICATION_JSON)
        );
    }

    private String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public <T> T fromJsonResult(final MvcResult mvcResult, final Class<T> tClass) throws Exception {
        final ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        return objectMapper.readValue(mvcResult.getResponse().getContentAsString(), tClass);
    }
}