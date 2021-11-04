package com.pjt3.promise.service;

import com.pjt3.promise.entity.User;
import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.request.UserInsertPostReq;

public interface PetService {
	int increasePetExp(int perExp, User user);
	Pet insertPet(UserInsertPostReq userInsertInfo);
}
