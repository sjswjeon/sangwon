package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long board_id;
    private Long user_id;

    @ManyToOne
    @JoinColumn(name = "board_id", insertable = false, updatable = false)
    private Board likedBoard;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User likedUser;
}
