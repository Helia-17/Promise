package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTakeHistory is a Querydsl query type for TakeHistory
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTakeHistory extends EntityPathBase<TakeHistory> {

    private static final long serialVersionUID = 755709181L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTakeHistory takeHistory = new QTakeHistory("takeHistory");

    public final QMediAlarm mediAlarm;

    public final NumberPath<Integer> thId = createNumber("thId", Integer.class);

    public final DateTimePath<java.util.Date> thTime = createDateTime("thTime", java.util.Date.class);

    public final NumberPath<Integer> thYN = createNumber("thYN", Integer.class);

    public final QUser user;

    public QTakeHistory(String variable) {
        this(TakeHistory.class, forVariable(variable), INITS);
    }

    public QTakeHistory(Path<? extends TakeHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTakeHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTakeHistory(PathMetadata metadata, PathInits inits) {
        this(TakeHistory.class, metadata, inits);
    }

    public QTakeHistory(Class<? extends TakeHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mediAlarm = inits.isInitialized("mediAlarm") ? new QMediAlarm(forProperty("mediAlarm"), inits.get("mediAlarm")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

