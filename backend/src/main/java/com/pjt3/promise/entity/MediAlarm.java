package com.pjt3.promise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="Medi_Alarm")
public class MediAlarm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="alarm_id")
    int alarmId;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_email")
    User user;

    @Column(name="alarm_title")
    String alarmTitle;

    @Column(name="alarm_YN")
    int alarmYN;

    @Column(name="alarm_days")
    String alarmDays;

    @Column(name="alarm_time1")
    String alarmTime1;

    @Column(name="alarm_time2")
    String alarmTime2;

    @Column(name="alarm_time3")
    String alarmTime3;

    @Column(name="alarm_time4")
    String alarmTime4;

    @Column(name="alarm_time5")
    String alarmTime5;

    @Column(name="alarm_day_start")
    String alarmDayStart;

    @Column(name="alarm_day_end")
    String alarmDayEnd;

    @JsonManagedReference
    @OneToMany(mappedBy="mediAlarm")
    List<TakeHistory> takeHistory = new ArrayList<TakeHistory>();

    @JsonManagedReference
    @OneToMany(mappedBy="mediAlarm")
    List<UserMedicine> userMedicine = new ArrayList<UserMedicine>();

    @JsonManagedReference
    @OneToMany(mappedBy="mediAlarm")
    List<Tag> tag = new ArrayList<Tag>();
}
