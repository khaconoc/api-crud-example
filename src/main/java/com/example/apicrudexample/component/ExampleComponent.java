package com.example.apicrudexample.component;

import com.example.apicrudexample.Pojo.ComboboxModel;
import com.example.apicrudexample.Pojo.UserModel;
import org.apache.catalina.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Component
public class ExampleComponent {
    public List<UserModel> listUser = new ArrayList<>();
    public List<ComboboxModel> listLevel = new ArrayList<>();

    ExampleComponent() {
        for(int i = 0; i< 96; i++) {
            Random generator = new Random();

            UserModel user = new UserModel();
            user.setFullName("nguyen hoang kha " + (i+1));
            user.setAge(generator.nextInt(70) + 1);
            user.setLevel(generator.nextInt(3));
            user.setBirthDate(new Date());
            listUser.add(user);
        }

        for(int i = 0; i<= 30; i++) {
            ComboboxModel combo = new ComboboxModel();

            if (i==0) {
                combo.setText("Tài khoản cấp "+ i);
            } else {
                combo.setText("Admin cấp cao");
            }
            combo.setValue(i);

            listLevel.add(combo);
        }
    }
}

