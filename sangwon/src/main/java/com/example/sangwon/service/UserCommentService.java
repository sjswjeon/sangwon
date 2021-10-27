package com.example.sangwon.service;

import com.example.sangwon.Model.*;
import com.example.sangwon.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Component
public class UserCommentService {

    @Autowired
    private UserCommentRepository userCommentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Transactional
    public boolean isLikedByUser(Comment comment, User user) {
        UserComment userComment = userCommentRepository.findByUserAndComment(user, comment).stream().findFirst().orElse(null);
        if (userComment == null) {
            return false;
        } else {
            return true;
        }
    }

    @Transactional
    public int totalLikes (Comment comment) {
        List<UserComment> allByComment = userCommentRepository.findAllByComment(comment);
        int size = allByComment.size();
        return size;
    }
}
