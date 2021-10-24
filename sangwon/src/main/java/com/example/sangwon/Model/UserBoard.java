package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class UserBoard {

    private Long board_id;

    private Long user_id;
}
