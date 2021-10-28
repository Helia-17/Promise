package com.pjt3.promise.service;

import com.pjt3.promise.entity.Pet;
import com.pjt3.promise.request.UserInsertPostReq;

public interface PetService {
	Pet insertPet(UserInsertPostReq userInsertInfo);
}
