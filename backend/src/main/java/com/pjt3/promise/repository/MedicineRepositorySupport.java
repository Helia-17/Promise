package com.pjt3.promise.repository;


import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MedicineRepositorySupport {

    @Autowired
    private JPAQueryFactory query;



}
