package com.example.sangwon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import javax.transaction.Transactional;

@SpringBootApplication
public class SangwonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SangwonApplication.class, args);
	}

}
