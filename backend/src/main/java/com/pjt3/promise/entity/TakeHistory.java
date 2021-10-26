package com.pjt3.promise.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="alarm_id")
    MediAlarm mediAlarm;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_email")
    User user;

    @Column(name="th_time")
    Date thTime;

    @Column(name="th_YN")
    int thYN;
}
