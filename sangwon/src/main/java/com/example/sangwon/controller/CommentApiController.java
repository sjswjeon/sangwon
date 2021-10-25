package com.example.sangwon.controller;

import com.example.sangwon.Model.Board;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.service.BoardService;
import com.example.sangwon.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentApiController {

    @Autowired
    private CommentService commentService;

    @DeleteMapping("/comment/{id}")
    void deleteComment(@PathVariable Long id) {
        commentService.deleteById(id);
    }
}
