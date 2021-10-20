package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long senderid;
    private Long receiverid;

    private String sender;
    private String receiver;
    private String content;
    private String date;
    private boolean checked;

    @ManyToOne
    @JoinColumn(name = "senderid", insertable = false, updatable = false)
    private User senderUser;

    @ManyToOne
    @JoinColumn(name = "receiverid", insertable = false, updatable = false)
    private User receiverUser;
}
