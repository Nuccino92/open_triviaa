package com.example.demo.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// responsible for data access
public interface UserRepository extends JpaRepository<User, Long>{

} 
