package com.example.apicrudexample.component;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ExampleComponent {
    public List<String> myList = new ArrayList<>();

    public void add(String value) {
        myList.add(value);
    }
}
