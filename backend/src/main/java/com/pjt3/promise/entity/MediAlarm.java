package com.pjt3.promise.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

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

    @Column(name="alarm_time")
    String alarmTime;

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
