package com.example.demo.User;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// makes class serve rest endpoints
@RestController

@RequestMapping(path = "user")
public class UserController {

	// N-Tier Architecture
	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
    
    @GetMapping
	public List<User> getUser() {
		return userService.getUser();
	}

	@PostMapping
	public void registerNewUser(@ModelAttribute User user) {
		userService.addNewUser(user);
	}
}
