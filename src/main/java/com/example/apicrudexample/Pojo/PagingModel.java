package com.example.apicrudexample.Pojo;

public class PagingModel {
    int count = 0;
    int page = 1;
    int size = 10;

    public PagingModel() {
    }

    public PagingModel(int count, int page, int size) {
        this.count = count;
        this.page = page;
        this.size = size;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
