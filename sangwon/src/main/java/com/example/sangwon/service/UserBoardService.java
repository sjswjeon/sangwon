package com.example.sangwon.service;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.User;
import com.example.sangwon.Model.UserBoard;
import com.example.sangwon.repository.BoardRepository;
import com.example.sangwon.repository.UserBoardRepository;
import com.example.sangwon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Component
public class UserBoardService {

    @Autowired
    private UserBoardRepository userBoardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BoardRepository boardRepository;

    @Transactional
    public boolean isLikedByUser(Board board, User user) {
        UserBoard userBoard = userBoardRepository.findByUserAndBoard(user, board).stream().findFirst().orElse(null);
        if (userBoard == null) {
            return false;
        } else {
            return true;
        }
    }
}
