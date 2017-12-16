package com.lyb.mysite.model;

import java.io.Serializable;

/**
 * @author yinbin.lan
 * @date 17/12/10
 * @desc links
 */
public class WebSiteLinks implements Serializable {
    private static final long serialVersionUID = 2651517558493610399L;
    /**
     * id
     */
    private Integer id;
    /**
     * 链接名称
     */
    private String linkName;
    /**
     * 链接类型
     * @see com.lyb.mysite.enums.LinkType
     */
    private Integer linkType;
    /**
     * 链接跳转url
     */
    private String linkUrl;
    /**
     * 链接图标、图片链接
     */
    private String linkImgUrl;

    public WebSiteLinks() {
    }

    public WebSiteLinks(Integer id, String linkName, Integer linkType, String linkUrl, String linkImgUrl) {
        this.id = id;
        this.linkName = linkName;
        this.linkType = linkType;
        this.linkUrl = linkUrl;
        this.linkImgUrl = linkImgUrl;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLinkName() {
        return linkName;
    }

    public void setLinkName(String linkName) {
        this.linkName = linkName;
    }

    public Integer getLinkType() {
        return linkType;
    }

    public void setLinkType(Integer linkType) {
        this.linkType = linkType;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public String getLinkImgUrl() {
        return linkImgUrl;
    }

    public void setLinkImgUrl(String linkImgUrl) {
        this.linkImgUrl = linkImgUrl;
    }

    @Override
    public String toString() {
        return "WebSiteLinks{" +
                "id=" + id +
                ", linkName='" + linkName + '\'' +
                ", linkType=" + linkType +
                ", linkUrl='" + linkUrl + '\'' +
                ", linkImgUrl='" + linkImgUrl + '\'' +
                '}';
    }
}
