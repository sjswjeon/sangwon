package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User likedUser;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board likedBoard;
}
