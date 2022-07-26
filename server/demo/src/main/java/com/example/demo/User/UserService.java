package com.example.demo.User;

import java.util.List;

import org.springframework.stereotype.Service;

// @Service allows Spring to detect custom beans
@Service
public class UserService {

	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
			this.userRepository = userRepository;
	}

    public List<User> getUser() {
		return userRepository.findAll();
	}

	public void addNewUser(User user) {
		System.out.println(user);
	}
}
