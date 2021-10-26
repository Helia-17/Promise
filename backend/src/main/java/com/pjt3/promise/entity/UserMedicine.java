package com.pjt3.promise.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name="User_Medicine")
public class UserMedicine {

    @Id
    @Column(name="um_id")
    int unId;

    @Column(name="alarm_id")
    int alarmId;

    @Column(name="medi_serial_num")
    String mediSerailNum;

    @Column(name="um_name")
    String unName;

}
