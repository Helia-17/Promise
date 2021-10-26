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
public class AlarmShare implements Serializable {
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="alarm_id")
    MediAlarm mediAlarm;

    @Id
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="shared_user_email")
    User sharedUser;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="share_user_email")
    User shareUser;

}
