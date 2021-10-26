package com.example.sangwon.service;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.Comment;
import com.example.sangwon.Model.User;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.repository.CommentRepository;
import com.example.sangwon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentRepository commentRepository;

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
            if (user.getPoint() >= 1000L) {
                user.setLevel("Level2");
            }
            if (user.getPoint() >= 2000L) {
                user.setLevel("level3");
            }
            if (user.getPoint() >= 3000L) {
                user.setLevel("level4");
            }
            if (user.getPoint() >= 4000L) {
                user.setLevel("level5");
            }

            userRepository.save(user);
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

    @Transactional
    public void deleteById(Long id) {
        Board board = boardRepository.findById(id).orElse(null);
        board.getLikedUsers().clear();
        List<Comment> Comments = commentRepository.findAllByBoardid(id);
        for (Comment comment : Comments) {
            comment.setCommentid(null);
            comment.setBoardid(null);
            comment.getLikedUsers().clear();
            commentRepository.save(comment);
        }
        commentRepository.deleteAllByCommentid(null);
        board.getComments().clear();

//        for (Comment comment : board.getComments()) {
//            for (Comment secondComment : comment.getSecondComments()) {
//                secondComment.setCommentid(null);
//                secondComment.setBoardid(null);
//                secondComment.getLikedUsers().clear();
//                commentRepository.save(secondComment);
//            }
//            comment.setCommentid(null);
//            comment.setBoardid(null);
//            comment.getLikedUsers().clear();
//            commentRepository.save(comment);
//        }
//        commentRepository.deleteAllByCommentid(null);
//        board.getComments().clear();

        boardRepository.deleteById(id);
    }

}
