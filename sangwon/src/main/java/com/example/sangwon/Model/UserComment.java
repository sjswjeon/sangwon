package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class UserComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long comment_id;
    private Long user_id;

    @ManyToOne
    @JoinColumn(name = "comment_id", insertable = false, updatable = false)
    private Comment likedComment;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User commentLikedUser;
}
