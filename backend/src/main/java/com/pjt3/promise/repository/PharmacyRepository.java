package com.pjt3.promise.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.Pharmacy;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy, String> {
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE mon_open_time <= (?3) and mon_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongMon(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE tue_open_time <= (?3) and tue_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongTue(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE wed_open_time <= (?3) and wed_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongWed(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE thu_open_time <= (?3) and thu_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongThu(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE fri_open_time <= (?3) and fri_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongFri(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE sat_open_time <= (?3) and sat_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongSat(double latitude, double longitude, String curTime);
	
	@Query(nativeQuery = true, value = "SELECT *,\n" + 
			"	(6371*acos(cos(radians(?1))*cos(radians(pharm_lat))*cos(radians(pharm_long)\n" + 
			"	-radians(?2))+sin(radians(?1))*sin(radians(pharm_lat))))\n" + 
			"	AS distance\n" + 
			"FROM Pharmacy\n" + 
			"WHERE sun_open_time <= (?3) and sun_close_time >= (?3)\n"+
			"HAVING distance <= 2\n" + 
			"ORDER BY distance \n" + 
			"LIMIT 0,20;")
	List<Pharmacy> findByLatLongSun(double latitude, double longitude, String curTime);

}
