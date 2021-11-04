package com.pjt3.promise.repository;

import com.pjt3.promise.entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, String> {
    List<String> findByMediNameContains(String searchKeyword);
    Medicine findByMediSerialNum(String mediSerialNum);
    Medicine findMedicineByMediName(String mediName);
}
