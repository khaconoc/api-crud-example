package com.example.apicrudexample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;

@Controller
public class HomeController {
//    @GetMapping("/")
//    public String testProcess() {
//        return "index";
//    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "redirect:/index.html";
    }

//    @RequestMapping("/{path:[^\\.]+}/**")
//    public String forward() {
//        return "forward:/";
//    }
}
