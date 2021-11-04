package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserMedicine is a Querydsl query type for UserMedicine
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserMedicine extends EntityPathBase<UserMedicine> {

    private static final long serialVersionUID = -613005771L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserMedicine userMedicine = new QUserMedicine("userMedicine");

    public final QMediAlarm mediAlarm;

    public final QMedicine medicine;

    public final StringPath umName = createString("umName");

    public final NumberPath<Integer> unId = createNumber("unId", Integer.class);

    public QUserMedicine(String variable) {
        this(UserMedicine.class, forVariable(variable), INITS);
    }

    public QUserMedicine(Path<? extends UserMedicine> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserMedicine(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserMedicine(PathMetadata metadata, PathInits inits) {
        this(UserMedicine.class, metadata, inits);
    }

    public QUserMedicine(Class<? extends UserMedicine> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.mediAlarm = inits.isInitialized("mediAlarm") ? new QMediAlarm(forProperty("mediAlarm"), inits.get("mediAlarm")) : null;
        this.medicine = inits.isInitialized("medicine") ? new QMedicine(forProperty("medicine")) : null;
    }

}

