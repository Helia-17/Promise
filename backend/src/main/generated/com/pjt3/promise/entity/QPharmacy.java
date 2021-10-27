package com.pjt3.promise.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QPharmacy is a Querydsl query type for Pharmacy
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QPharmacy extends EntityPathBase<Pharmacy> {

    private static final long serialVersionUID = 1654581187L;

    public static final QPharmacy pharmacy = new QPharmacy("pharmacy");

    public final StringPath friCloseTime = createString("friCloseTime");

    public final StringPath friOpenTime = createString("friOpenTime");

    public final StringPath monCloseTime = createString("monCloseTime");

    public final StringPath monOpenTime = createString("monOpenTime");

    public final StringPath pharmAddr = createString("pharmAddr");

    public final StringPath pharmAddrCity = createString("pharmAddrCity");

    public final StringPath pharmAddrGu = createString("pharmAddrGu");

    public final NumberPath<Integer> pharmId = createNumber("pharmId", Integer.class);

    public final NumberPath<Integer> pharmLat = createNumber("pharmLat", Integer.class);

    public final StringPath pharmLong = createString("pharmLong");

    public final StringPath pharmName = createString("pharmName");

    public final StringPath pharmTel = createString("pharmTel");

    public final StringPath satCloseTime = createString("satCloseTime");

    public final StringPath satOpenTime = createString("satOpenTime");

    public final StringPath sunCloseTime = createString("sunCloseTime");

    public final StringPath sunOpenTime = createString("sunOpenTime");

    public final StringPath thuCloseTime = createString("thuCloseTime");

    public final StringPath thuOpenTime = createString("thuOpenTime");

    public final StringPath tueCloseTime = createString("tueCloseTime");

    public final StringPath tueOpenTime = createString("tueOpenTime");

    public final StringPath wedCloseTime = createString("wedCloseTime");

    public final StringPath wedOpenTime = createString("wedOpenTime");

    public QPharmacy(String variable) {
        super(Pharmacy.class, forVariable(variable));
    }

    public QPharmacy(Path<? extends Pharmacy> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPharmacy(PathMetadata metadata) {
        super(Pharmacy.class, metadata);
    }

}

