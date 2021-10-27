package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long boardid;
    private Long depth = 0L;
    private String username;
    private String content;
    private Long commentid;
    private String date;
    private int likes = 0;

    @ManyToOne
    @JoinColumn(name = "boardid", insertable = false, updatable = false)
    private Board board;

    @ManyToOne
    @JoinColumn(name = "commentid", insertable = false, updatable = false)
    private Comment parentComment;

    @OneToMany(mappedBy = "parentComment", fetch = FetchType.EAGER)
    private List<Comment> secondComments = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "user_comment",
            joinColumns = @JoinColumn(name = "comment_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    List<User> likedUsers = new ArrayList<>();

    @OneToMany(mappedBy = "comment")
    private List<UserComment> userComments = new ArrayList<>();
}
