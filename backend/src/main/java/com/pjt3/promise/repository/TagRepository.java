package com.pjt3.promise.repository;

import com.pjt3.promise.entity.Tag;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {
	@Transactional
	void deleteByMediAlarmAlarmId(int alarmId);
}
