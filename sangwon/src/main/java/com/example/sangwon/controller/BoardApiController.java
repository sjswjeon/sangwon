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
public class BoardApiController {

    @Autowired
    private com.example.sangwon.repository.BoardRepository BoardRepository;

    @Autowired
    private BoardService boardService;

    @Autowired
    private CommentService commentService;


    @GetMapping("/board")
    List<Board> all() {
        return BoardRepository.findAll();
    }

    @PostMapping("/board")
    Board newBoard(@RequestBody Board newBoard) {
        return BoardRepository.save(newBoard);
    }

    @PutMapping("/board/read/{id}")
    void addViewCount(@PathVariable Long id) {
        boardService.read(id);
    }

    @PutMapping("/board/read/like/{id}")
    void likeBoard(@PathVariable Long id, Authentication authentication) {
        String authenticationName = authentication.getName();
        boardService.likeBoard(id, authenticationName);
    }

    @PutMapping("/board/read/likecomment/{id}")
    void likeComment(@PathVariable Long id, Authentication authentication) {
        String authenticationName = authentication.getName();
        commentService.likeComment(id, authenticationName);
    }

    @DeleteMapping("/board/{id}")
    void deleteBoard(@PathVariable Long id) {
        BoardRepository.deleteById(id);
    }
}
