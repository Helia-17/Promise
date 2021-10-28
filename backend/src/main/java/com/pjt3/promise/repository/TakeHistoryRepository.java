package com.pjt3.promise.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.TakeHistory;

@Repository
public interface TakeHistoryRepository extends JpaRepository<TakeHistory, Integer>{

}
