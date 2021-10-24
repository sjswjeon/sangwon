package com.example.sangwon.Model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class UserBoard {

    @Id
    private Long board_id;

    @Id
    private Long user_id;
}
