package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCommunityComment is a Querydsl query type for CommunityComment
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCommunityComment extends EntityPathBase<CommunityComment> {

    private static final long serialVersionUID = -634396346L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCommunityComment communityComment = new QCommunityComment("communityComment");

    public final StringPath commentContents = createString("commentContents");

    public final DateTimePath<java.util.Date> commentDate = createDateTime("commentDate", java.util.Date.class);

    public final NumberPath<Integer> commentId = createNumber("commentId", Integer.class);

    public final QCommunity community;

    public final QUser user;

    public QCommunityComment(String variable) {
        this(CommunityComment.class, forVariable(variable), INITS);
    }

    public QCommunityComment(Path<? extends CommunityComment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCommunityComment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCommunityComment(PathMetadata metadata, PathInits inits) {
        this(CommunityComment.class, metadata, inits);
    }

    public QCommunityComment(Class<? extends CommunityComment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.community = inits.isInitialized("community") ? new QCommunity(forProperty("community"), inits.get("community")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

