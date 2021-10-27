package com.pjt3.promise.service;

import com.pjt3.promise.entity.Medicine;
import com.pjt3.promise.repository.MedicineRepository;
import com.pjt3.promise.repository.MedicineRepositorySupport;
import com.pjt3.promise.response.MediSearchGetRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("MedicineService")
public class MedicineServiceImpl implements MedicineService{
    @Autowired
    MedicineRepository medicineRepository;

    @Autowired
    MedicineRepositorySupport medicineRepositorySupport;

    @Override
    public List<String> getMediAutoListInfo(String searchKeyword) {
        List<String> mediList = medicineRepository.findByMediNameContains(searchKeyword);
        return mediList;
    }

    @Override
    public List<MediSearchGetRes> getMediSearchListInfo(String searchKeyword) {
        List<MediSearchGetRes> mediList = medicineRepositorySupport.getMediSearchListInfo(searchKeyword);
        return mediList;
    }

    @Override
    public Medicine getMediSearchDetailInfo(String mediSerialNum) {
        Medicine medicineDetail = medicineRepository.findByMediSerialNum(mediSerialNum);
        return medicineDetail;
    }

}
