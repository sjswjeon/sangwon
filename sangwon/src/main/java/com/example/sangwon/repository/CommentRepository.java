package com.example.sangwon.repository;

import com.example.sangwon.Model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    void deleteAllByCommentid(Long commentid);
    List<Comment> findAllByBoardid(Long boardid);
    List<Comment> findAllByCommentid(Long commentid);
}
