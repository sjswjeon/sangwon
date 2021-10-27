package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "userboard")
public class UserBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "boardid")
    private Board board;
}
