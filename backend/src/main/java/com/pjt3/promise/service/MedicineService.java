package com.pjt3.promise.service;

import com.pjt3.promise.entity.Medicine;
import com.pjt3.promise.response.MediSearchGetRes;

import java.util.List;

public interface MedicineService {
    List<String> getMediAutoListInfo(String searchKeyword);
    List<MediSearchGetRes> getMediSearchListInfo(String searchKeyword);
    Medicine getMediSearchDetailInfo(String searchKeyword);
}
