package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 867604187L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUser user = new QUser("user");

    public final ListPath<AlarmShare, QAlarmShare> alarmShare = this.<AlarmShare, QAlarmShare>createList("alarmShare", AlarmShare.class, QAlarmShare.class, PathInits.DIRECT2);

    public final ListPath<Community, QCommunity> community = this.<Community, QCommunity>createList("community", Community.class, QCommunity.class, PathInits.DIRECT2);

    public final ListPath<CommunityComment, QCommunityComment> communityComment = this.<CommunityComment, QCommunityComment>createList("communityComment", CommunityComment.class, QCommunityComment.class, PathInits.DIRECT2);

    public final ListPath<MediAlarm, QMediAlarm> mediAlarm = this.<MediAlarm, QMediAlarm>createList("mediAlarm", MediAlarm.class, QMediAlarm.class, PathInits.DIRECT2);

    public final QPet pet;

    public final ListPath<Tag, QTag> tag = this.<Tag, QTag>createList("tag", Tag.class, QTag.class, PathInits.DIRECT2);

    public final ListPath<TakeHistory, QTakeHistory> takeHistorie = this.<TakeHistory, QTakeHistory>createList("takeHistorie", TakeHistory.class, QTakeHistory.class, PathInits.DIRECT2);

    public final StringPath userEmail = createString("userEmail");

    public final DateTimePath<java.util.Date> userJoinDate = createDateTime("userJoinDate", java.util.Date.class);

    public final NumberPath<Integer> userJoinType = createNumber("userJoinType", Integer.class);

    public final StringPath userNickname = createString("userNickname");

    public final StringPath userProfileUrl = createString("userProfileUrl");

    public final NumberPath<Integer> userType = createNumber("userType", Integer.class);

    public QUser(String variable) {
        this(User.class, forVariable(variable), INITS);
    }

    public QUser(Path<? extends User> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUser(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUser(PathMetadata metadata, PathInits inits) {
        this(User.class, metadata, inits);
    }

    public QUser(Class<? extends User> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.pet = inits.isInitialized("pet") ? new QPet(forProperty("pet"), inits.get("pet")) : null;
    }

}

