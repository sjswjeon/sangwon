package com.example.sangwon.controller;


import com.example.sangwon.Model.Posts;
import com.example.sangwon.repository.PostsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@AllArgsConstructor
public class WebController {

    @Autowired
    private PostsRepository postsRepository;

    @GetMapping("/main")
    public String main(Model model) {
        List<Posts> all = postsRepository.findAll();
        model.addAttribute("lists", all);

        return "main";
    }
}
