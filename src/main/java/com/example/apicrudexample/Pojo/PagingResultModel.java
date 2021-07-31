package com.example.apicrudexample.Pojo;

import java.util.List;

public class PagingResultModel<T> {
    List<T> data;
    PagingModel paging;

    public PagingResultModel() {
    }

    public PagingResultModel(List<T> data, PagingModel paging) {
        this.data = data;
        this.paging = paging;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public PagingModel getPaging() {
        return paging;
    }

    public void setPaging(PagingModel paging) {
        this.paging = paging;
    }
}
