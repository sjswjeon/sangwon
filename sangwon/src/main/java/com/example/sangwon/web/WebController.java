package com.example.sangwon.web;

import com.example.sangwon.posts.Posts;
import com.example.sangwon.posts.PostsRepository;
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

    @GetMapping("/")
    public String main(Model model) {
        List<Posts> all = postsRepository.findAll();
        model.addAttribute("lists", all);

        return "main";
    }
}