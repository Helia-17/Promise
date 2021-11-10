package com.pjt3.promise.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pjt3.promise.entity.QTag;
import com.pjt3.promise.response.UsersTagGetRes;
import com.querydsl.core.QueryResults;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.jpa.impl.JPAQueryFactory;

@Repository
public class VisualRepositorySupport {

	@Autowired
    private JPAQueryFactory query;
	
	QTag qTag = QTag.tag;
	
	public List<UsersTagGetRes> getUsersTagListInfo() {
		NumberPath<Long> tagValue = Expressions.numberPath(Long.class, "tagCount");
		
		List<Tuple> usersTagTupleList = query.select(qTag.tagName, qTag.tagName.count().as(tagValue)).from(qTag).groupBy(qTag.tagName).orderBy(tagValue.desc()).limit(10).fetch();

		List<UsersTagGetRes> usersTagList = new ArrayList<>();
		
		for(Tuple usersTupleTag : usersTagTupleList) {
			UsersTagGetRes usersTag = new UsersTagGetRes();
			usersTag.setTagName(usersTupleTag.get(0, String.class));
			try {
				usersTag.setTagValue(Integer.parseInt(String.valueOf(usersTupleTag.get(1, Integer.class))));
			} catch(Exception e) {
				e.printStackTrace();
			}
			usersTagList.add(usersTag);
		}
		return usersTagList;
	}

}
