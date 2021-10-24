package com.example.sangwon.repository;

import com.example.sangwon.Model.User;
import com.example.sangwon.Model.UserBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBoardRepository extends JpaRepository<UserBoard, Long> {
}
