package com.pjt3.promise.repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.MediAlarm;
import com.pjt3.promise.entity.User;

@Repository
public interface MediAlarmRepository extends JpaRepository<MediAlarm, Integer> {
	MediAlarm findMediAlarmByAlarmId(int alarmId);
}
