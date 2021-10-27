package com.pjt3.promise.repository;

import com.pjt3.promise.entity.UserMedicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMedicineRepository extends JpaRepository<UserMedicine, Integer> {
}
