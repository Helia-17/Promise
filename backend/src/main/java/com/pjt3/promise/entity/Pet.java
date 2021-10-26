package com.pjt3.promise.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="Pet")
public class Pet {
    @Id
    @Column(name="pet_id")
    int petId;

    // FK
    @Column(name="user_email")
    String userEmail;

    @Column(name="pet_name")
    String petName;

    @Column(name="pet_type")
    int petType;

    @Column(name="pet_level")
    int petLevel;

    @Column(name="pet_exp")
    int petExp;
}
