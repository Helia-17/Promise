package com.pjt3.promise.repository;


import com.pjt3.promise.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, String> {
     Medicine findMedicineByMediName(String mediName);
}
