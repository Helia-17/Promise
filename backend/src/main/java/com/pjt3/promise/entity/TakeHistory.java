package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="Take_History")
public class TakeHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="th_id")
    int thId;

    @Column(name="alarm_id")
    int alarmId;

    @Column(name="user_email")
    String userEmail;

    @Column(name="th_time")
    Date thTime;

    @Column(name="th_YN")
    int thYN;
}
