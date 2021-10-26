package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Medi_Alarm")
public class MediAlarm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="alarm_id")
    int alarmId;

    @Column(name="user_email")
    String userEmail;

    @Id
    @Column(name="alarm_title")
    String alarmTitle;

    @Column(name="alarm_YN")
    int alarmYN;

    @Id
    @Column(name="alarm_days")
    String alarmDays;

    @Id
    @Column(name="alarm_time1")
    String alarmTime1;

    @Id
    @Column(name="alarm_time2")
    String alarmTime2;

    @Id
    @Column(name="alarm_time3")
    String alarmTime3;

    @Id
    @Column(name="alarm_time4")
    String alarmTime4;

    @Id
    @Column(name="alarm_time5")
    String alarmTime5;

    @Id
    @Column(name="alarm_day_start")
    String alarmDayStart;

    @Id
    @Column(name="alarm_day_end")
    String alarmDayEnd;

}
