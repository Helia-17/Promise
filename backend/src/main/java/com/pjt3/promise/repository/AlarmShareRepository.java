package com.pjt3.promise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.AlarmShare;

@Repository
public interface AlarmShareRepository extends JpaRepository<AlarmShare, Integer>{
	void deleteByMediAlarmAlarmId(int alarmId);
}
