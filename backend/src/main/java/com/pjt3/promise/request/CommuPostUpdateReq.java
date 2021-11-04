package com.pjt3.promise.request;

import lombok.Data;

@Data
public class CommuPostUpdateReq {
    int commuId;
    String commuTitle;
    String commuContents;
}
