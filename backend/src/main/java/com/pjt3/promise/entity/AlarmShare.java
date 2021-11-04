package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.io.Serializable;


@Entity
@Getter
@Setter
@Table(name="Alarm_Share")
public class AlarmShare {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="as_id")
    int asId;
	
    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="alarm_id")
    MediAlarm mediAlarm;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_email")
    User user;
}
