package com.example.sangwon.repository;

import com.example.sangwon.Model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Long> {
}
