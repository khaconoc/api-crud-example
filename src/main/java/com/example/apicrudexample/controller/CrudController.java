package com.example.apicrudexample.controller;

import com.example.apicrudexample.component.ExampleComponent;
import io.swagger.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CrudController {

    @Autowired
    ExampleComponent exampleComponent;

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok(exampleComponent.myList);
    }

    @GetMapping("/add")
    public ResponseEntity<?> add() {
        exampleComponent.add("ahihi");
        return ResponseEntity.ok(exampleComponent.myList);
    }
}
