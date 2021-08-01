package com.example.apicrudexample.controller;

import com.example.apicrudexample.Pojo.UserModel;
import com.example.apicrudexample.component.ExampleComponent;
import io.swagger.models.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.IntStream;

@RestController
@RequestMapping("/api")
public class CrudController {

    @Autowired
    ExampleComponent exampleComponent;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody UserModel user) {
        UserModel userModel = new UserModel();
        userModel.setFullName(user.getFullName());
        userModel.setBirthDate(user.getBirthDate());
        userModel.setAge(user.getAge());
        userModel.setLevel(user.getLevel());
        exampleComponent.listUser.add(userModel);
        return ResponseEntity.ok(userModel.getId());
    }

    @PutMapping("/edit")
    public ResponseEntity<?> edit(@RequestBody UserModel user) {

        UserModel userEdit = exampleComponent.listUser.stream()
                .filter(e -> e.getId().equals(user.getId()))
                .findAny()
                .orElse(null);

        if(userEdit == null) {
            return ResponseEntity.notFound().build();
        }
        userEdit.setFullName(user.getFullName());
        userEdit.setBirthDate(user.getBirthDate());
        userEdit.setAge(user.getAge());
        userEdit.setLevel(user.getLevel());
        return ResponseEntity.ok(userEdit.getId());
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String id) {

        int index = IntStream.range(0, exampleComponent.listUser.size())
                .filter(i -> exampleComponent.listUser.get(i).getId().equals(id))
                .findFirst()
                .getAsInt();

        if(index < 0) {
            return ResponseEntity.notFound().build();
        }
        exampleComponent.listUser.remove(index);
        return ResponseEntity.ok(index);
    }

    @GetMapping("/find-one")
    public ResponseEntity<?> findOne(@RequestBody String id) {

        UserModel user = exampleComponent.listUser.stream()
                .filter(e -> e.getId().equals(id))
                .findAny()
                .orElse(null);

        if(user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }
}
