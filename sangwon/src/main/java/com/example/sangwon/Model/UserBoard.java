package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
public class UserBoard {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User likedUser;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board likedBoard;
}
