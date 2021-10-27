package com.example.sangwon.repository;

import com.example.sangwon.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCommentRepository extends JpaRepository<UserComment, Long> {
    List<UserComment> deleteAllByUserAndComment(User user, Comment comment);
    List<UserComment> deleteAllByComment(Comment comment);
    List<UserComment> findByUserAndComment(User user, Comment comment);
    List<UserComment> findAllByComment(Comment comment);
}
