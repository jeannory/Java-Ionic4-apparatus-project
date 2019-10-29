package com.apparatus.repositories;

import com.apparatus.entities.Apparatus;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@DataJpaTest
public class ApparatusRepositoryTest {

    @Autowired
    private ApparatusRepository apparatusRepository;

    @Before
    public void setUp() throws Exception {
    }

    @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD)
    @Test
    public void test_findById_when_apparatus_exist_should_return_apparatus(){
        //given
        final Apparatus apparatus1 = new Apparatus();
        apparatus1.setName("Frigo");
        apparatus1.setDescription(Arrays.asList("Contenance : 100 litres", "Catégorie consommation: A"));
        apparatus1.setLight(true);
        apparatusRepository.save(apparatus1);

        //when
        final Optional<Apparatus> result = apparatusRepository.findById(1);

        //then
        Assert.assertEquals("Frigo", result.get().getName());
    }
}