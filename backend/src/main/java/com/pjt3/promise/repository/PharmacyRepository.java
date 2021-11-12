package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.Pharmacy;
import com.pjt3.promise.entity.PharmacyDistanceInterface;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, String> {
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE mon_open_time <= (?3) and mon_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongMon(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value ="SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE tue_open_time <= (?3) and tue_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongTue(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE wed_open_time <= (?3) and wed_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongWed(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE thu_open_time <= (?3) and thu_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongThu(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE fri_open_time <= (?3) and fri_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongFri(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE sat_open_time <= (?3) and sat_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongSat(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT pharm_id AS pharmId, pharm_name AS pharmName,\n" +
			"pharm_addr AS pharmAddr, pharm_tel AS pharmTel, pharm_lat AS pharmLat, pharm_long AS pharmLong,\n"+
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE sun_open_time <= (?3) and sun_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<PharmacyDistanceInterface> findByLatLongSun(double latitude, double longitude, String curTime);

}
