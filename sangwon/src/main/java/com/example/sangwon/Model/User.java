package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String email;
    private Long point;
    private boolean enabled;
    private String date;
    private String level;

    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    List<Role> roles = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Board> boards = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "likedUsers")
    private List<Board> likedBoards;

    @ManyToMany
    @JoinColumn(name = "likedUsers")
    private List<Comment> likedComments;

    @OneToMany(mappedBy = "senderUser")
    private List<Message> sentMessages = new ArrayList<>();

    @OneToMany(mappedBy = "receiverUser")
    private List<Message> receivedMessages = new ArrayList<>();

}
