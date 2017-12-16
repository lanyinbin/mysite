package com.lyb.mysite.enums;

/**
 * @author yinbin.lan
 * @date 17/12/10
 * @desc 创建类
 */
public enum LinkType {
    BANNER_LINK(0,"Banner图链接"),
    BUSSINESS_LINK(1,"业务推广链接"),
    COOPERATION_LINK(2,"合作链接"),
    TITLE_LINK(3,"标题跳转链接");
    private Integer type;
    private String desc;

    LinkType(Integer type, String desc) {
        this.type = type;
        this.desc = desc;
    }

}
