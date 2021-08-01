package com.example.apicrudexample.Pojo;

public class ComboboxModel {
    String text;
    Object value;
    Object parent;

    public ComboboxModel() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    public Object getParent() {
        return parent;
    }

    public void setParent(Object parent) {
        this.parent = parent;
    }

    public ComboboxModel(String text, Object value, Object parent) {
        this.text = text;
        this.value = value;
        this.parent = parent;
    }
}
