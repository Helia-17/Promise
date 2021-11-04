package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAlarmShare is a Querydsl query type for AlarmShare
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAlarmShare extends EntityPathBase<AlarmShare> {

    private static final long serialVersionUID = 914673438L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAlarmShare alarmShare = new QAlarmShare("alarmShare");

    public final NumberPath<Integer> asId = createNumber("asId", Integer.class);

    public final QMediAlarm mediAlarm;

    public final QUser user;

    public QAlarmShare(String variable) {
        this(AlarmShare.class, forVariable(variable), INITS);
    }

    public QAlarmShare(Path<? extends AlarmShare> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAlarmShare(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAlarmShare(PathMetadata metadata, PathInits inits) {
        this(AlarmShare.class, metadata, inits);
    }

    public QAlarmShare(Class<? extends AlarmShare> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mediAlarm = inits.isInitialized("mediAlarm") ? new QMediAlarm(forProperty("mediAlarm"), inits.get("mediAlarm")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

