package com.example.demo;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.User.User;

@SpringBootApplication

// makes class serve rest endpoints
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping
	public List<User> hello() {
		return List.of(
			new User(
				1L,
				"Tony",
				"cheese@hotmail.com",
				"12345"
			)
		);
	}
}
