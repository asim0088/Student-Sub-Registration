package com.example.student1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.student1.Role;

public interface UserRoleRepo extends JpaRepository<Role, Long> {

}
