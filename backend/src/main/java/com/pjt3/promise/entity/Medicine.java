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
@Table(name="Medicine")
public class Medicine {

    @Id
    @Column(name="medi_serial_num")
    String mediSerialNum;

    @Column(name="medi_name")
    String mediName;

    @Column(name="medi_company")
    String mediCompany;

    @Column(name="medi_img_url")
    String mediImgUrl;

    @Column(name="medi_ingredient")
    String mediIngredient;

    @Column(name="medi_efficacy")
    String mediEfficacy;

    @Column(name="medi_take_way")
    String mediTakeWay;

    @Column(name="medi_precautions_before")
    String mediPrecautionsBefore;

    @Column(name="medi_precautions_after")
    String mediPrecautionsAfter;

    @Column(name="medi_not_with")
    String mediNotWith;

    @Column(name="medi_allergy")
    String mediAllergy;

    @Column(name="medi_store_way")
    String mediStoreWay;

    @Column(name="medi_elderly_care")
    int mediElderlyCare;

    @Column(name="medi_pregnancy_care")
    int mediPregnancyCare;

    @Column(name="medi_age_care")
    int mediAgeCare;

    @Column(name="medi_class")
    String mediClass;

}
