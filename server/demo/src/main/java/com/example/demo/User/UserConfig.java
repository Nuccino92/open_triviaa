package com.example.demo.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
            User anthony = new User(
            "Anthony","anthony@hotmail.com", "1234"
              );  

        repository.save(anthony);   
        };
    };
}
