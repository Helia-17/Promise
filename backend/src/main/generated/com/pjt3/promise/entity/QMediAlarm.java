package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMediAlarm is a Querydsl query type for MediAlarm
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMediAlarm extends EntityPathBase<MediAlarm> {

    private static final long serialVersionUID = -1984086236L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMediAlarm mediAlarm = new QMediAlarm("mediAlarm");

    public final StringPath alarmDayEnd = createString("alarmDayEnd");

    public final StringPath alarmDayStart = createString("alarmDayStart");

    public final NumberPath<Integer> alarmId = createNumber("alarmId", Integer.class);

    public final StringPath alarmTime1 = createString("alarmTime1");

    public final StringPath alarmTime2 = createString("alarmTime2");

    public final StringPath alarmTime3 = createString("alarmTime3");

    public final StringPath alarmTitle = createString("alarmTitle");

    public final NumberPath<Integer> alarmYN = createNumber("alarmYN", Integer.class);

    public final ListPath<Tag, QTag> tag = this.<Tag, QTag>createList("tag", Tag.class, QTag.class, PathInits.DIRECT2);

    public final ListPath<TakeHistory, QTakeHistory> takeHistory = this.<TakeHistory, QTakeHistory>createList("takeHistory", TakeHistory.class, QTakeHistory.class, PathInits.DIRECT2);

    public final QUser user;

    public final ListPath<UserMedicine, QUserMedicine> userMedicine = this.<UserMedicine, QUserMedicine>createList("userMedicine", UserMedicine.class, QUserMedicine.class, PathInits.DIRECT2);

    public QMediAlarm(String variable) {
        this(MediAlarm.class, forVariable(variable), INITS);
    }

    public QMediAlarm(Path<? extends MediAlarm> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMediAlarm(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMediAlarm(PathMetadata metadata, PathInits inits) {
        this(MediAlarm.class, metadata, inits);
    }

    public QMediAlarm(Class<? extends MediAlarm> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

