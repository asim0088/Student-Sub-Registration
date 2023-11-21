package com.example.student1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.student1.Users;

public interface UsersRepository extends JpaRepository<Users, Long>{

	Users findByUserName(String userName);
}
