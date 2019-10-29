package com.apparatus.repositories;

import com.apparatus.entities.Apparatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApparatusRepository extends JpaRepository<Apparatus, Integer> {
}
