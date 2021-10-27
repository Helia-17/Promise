package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMedicine is a Querydsl query type for Medicine
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QMedicine extends EntityPathBase<Medicine> {

    private static final long serialVersionUID = -1864107702L;

    public static final QMedicine medicine = new QMedicine("medicine");

    public final NumberPath<Integer> mediAgeCare = createNumber("mediAgeCare", Integer.class);

    public final StringPath mediAllergy = createString("mediAllergy");

    public final StringPath mediClass = createString("mediClass");

    public final StringPath mediCompany = createString("mediCompany");

    public final StringPath mediEfficacy = createString("mediEfficacy");

    public final NumberPath<Integer> mediElderlyCare = createNumber("mediElderlyCare", Integer.class);

    public final StringPath mediImgUrl = createString("mediImgUrl");

    public final StringPath mediIngredient = createString("mediIngredient");

    public final StringPath mediName = createString("mediName");

    public final StringPath mediNotWith = createString("mediNotWith");

    public final StringPath mediPrecautionsAfter = createString("mediPrecautionsAfter");

    public final StringPath mediPrecautionsBefore = createString("mediPrecautionsBefore");

    public final NumberPath<Integer> mediPregnancyCare = createNumber("mediPregnancyCare", Integer.class);

    public final StringPath mediSerialNum = createString("mediSerialNum");

    public final StringPath mediStoreWay = createString("mediStoreWay");

    public final StringPath mediTakeWay = createString("mediTakeWay");

    public final ListPath<UserMedicine, QUserMedicine> userMedicine = this.<UserMedicine, QUserMedicine>createList("userMedicine", UserMedicine.class, QUserMedicine.class, PathInits.DIRECT2);

    public QMedicine(String variable) {
        super(Medicine.class, forVariable(variable));
    }

    public QMedicine(Path<? extends Medicine> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMedicine(PathMetadata metadata) {
        super(Medicine.class, metadata);
    }

}

