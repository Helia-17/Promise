package com.pjt3.promise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet, String> {
	Pet findPetByPetId(int petId);
}
