package com.pjt3.promise.repository;

import com.pjt3.promise.entity.MediAlarm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediAlarmRepository extends JpaRepository<MediAlarm, Integer> {
}
