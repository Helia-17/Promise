package com.pjt3.promise.entity;

import javax.persistence.*;

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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_email")
    User user;

    @Column(name="pet_name")
    String petName;

    @Column(name="pet_type")
    int petType;

    @Column(name="pet_level")
    int petLevel;

    @Column(name="pet_exp")
    int petExp;
}
