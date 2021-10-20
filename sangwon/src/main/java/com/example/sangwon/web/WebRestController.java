package com.example.sangwon.web;

import com.example.sangwon.posts.Posts;
import com.example.sangwon.posts.PostsRepository;
import com.example.sangwon.posts.PostsSaveRequestDto;
import com.example.sangwon.service.PostsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class WebRestController {

    private PostsService postsService;

    @GetMapping("/hello")
    public String hello() {
        return "HelloWorld";
    }

    @PostMapping("/posts")
    public void savePosts(Posts posts) {
        postsService.save(posts);
    }
}
