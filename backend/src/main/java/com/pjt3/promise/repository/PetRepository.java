package com.pjt3.promise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.entity.User;

@Repository
public interface PetRepository extends JpaRepository<Pet, String>{
	Pet findPetByUser(User user);
	Pet findPetByPetId(int petId);
}
