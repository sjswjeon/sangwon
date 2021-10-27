package com.example.sangwon.repository;

import com.example.sangwon.Model.Board;
import com.example.sangwon.Model.User;
import com.example.sangwon.Model.UserBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserBoardRepository extends JpaRepository<UserBoard, Long> {
    List<UserBoard> deleteAllByUserAndBoard(User user, Board board);
    List<UserBoard> deleteAllByBoard(Board board);
    List<UserBoard> findByUserAndBoard(User user, Board board);
}
