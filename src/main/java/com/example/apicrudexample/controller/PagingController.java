package com.example.apicrudexample.controller;

import com.example.apicrudexample.Pojo.PagingModel;
import com.example.apicrudexample.Pojo.PagingResultModel;
import com.example.apicrudexample.Pojo.UserModel;
import com.example.apicrudexample.component.ExampleComponent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PagingController {

    @Autowired
    ExampleComponent exampleComponent;

    @GetMapping("/get-paging")
    public ResponseEntity<PagingResultModel<UserModel>> getPaging(
            @RequestParam int page,
            @RequestParam int size,
            HttpServletResponse response
    ) {
        PagingModel pagingModel = new PagingModel();
        pagingModel.setPage(page);
        pagingModel.setSize(size);
        pagingModel.setCount(exampleComponent.listUser.size());

        /// 1* 20 - 1 = 19
        /// 2* 20  -1 = 30
        int end = page*size - 1;

        /// 1*20 - 20 = 0
        /// 2*20 - 20 = 20
        int begin = page*size - (size);
        List<UserModel> listRs = new ArrayList<>();
        for (int i = begin; i <= end; i++) {
            if (i <= exampleComponent.listUser.size() -1) {
                listRs.add(exampleComponent.listUser.get(i));
            }
        }

        PagingResultModel<UserModel> pagingResultModel = new PagingResultModel<>();

        pagingResultModel.setData(listRs);
        pagingResultModel.setPaging(pagingModel);
        response.setHeader(HttpHeaders.CACHE_CONTROL, "public, max-age=3600");
        return ResponseEntity.ok(pagingResultModel);
    }
}
