package com.example.sangwon.service;

import com.example.sangwon.Model.Posts;
import com.example.sangwon.repository.PostsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@AllArgsConstructor
@Service
public class PostsService {
    private PostsRepository postsRepository;

    @Transactional
    public Posts save(Posts posts){
        return postsRepository.save(posts);
    }
}
