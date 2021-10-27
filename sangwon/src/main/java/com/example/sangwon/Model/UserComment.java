package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "usercomment")
public class UserComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "commentid")
    private Comment comment;
}
