package com.example.sangwon.service;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.User;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Board save(Board board, String username) {

        if (board.getId() == null) {
            String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
            User user = userRepository.findByUsername(username);
            board.setUser(user);
            board.setUsername(username);
            board.setView(0L);
            board.setLikes(0L);
            board.setDate(date);

            user.setPoint(user.getPoint() + 100L);
        } else {
            Board originalPost = boardRepository.findById(board.getId()).orElse(null);
            board.setUser(originalPost.getUser());
            board.setUsername(originalPost.getUsername());
            board.setLikes(originalPost.getLikes());
            board.setView(originalPost.getView());
            board.setComments(originalPost.getComments());
            board.setLikedUsers(originalPost.getLikedUsers());
            board.setDate(originalPost.getDate());
        }

        return boardRepository.save(board);
    }

    @Transactional
    public Board read(Long boardId) {
        Board board = boardRepository.findById(boardId).orElse(null);
        board.setView(board.getView()+1L);
        return boardRepository.save(board);
    }

    @Transactional
    public Board likeBoard(Long id, String username) {
        Board board = boardRepository.findById(id).orElse(null);
        User user = userRepository.findByUsername(username);

        if (board.getLikedUsers().contains(user)) {
            board.getLikedUsers().remove(user);
            board.setLikes(board.getLikes()-1L);
        } else {
            board.getLikedUsers().add(user);
            board.setLikes(board.getLikes()+1L);
        }

        return boardRepository.save(board);
    }

}
