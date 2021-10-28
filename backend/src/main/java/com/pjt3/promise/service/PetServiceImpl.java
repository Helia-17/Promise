package com.pjt3.promise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.entity.User;
import com.pjt3.promise.repository.PetRepository;
import com.pjt3.promise.request.UserInsertPostReq;

@Service("petService")
public class PetServiceImpl implements PetService {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PetRepository petRepository;

	@Override
	public Pet insertPet(UserInsertPostReq userInsertInfo) {
		Pet pet = new Pet();
		User user = userService.getUserByUserEmail(userInsertInfo.getUserEmail());
		
		pet.setUser(user);
		pet.setPetName(userInsertInfo.getPetName());
		pet.setPetType(userInsertInfo.getPetType());
		
		return petRepository.save(pet);
	}

}
