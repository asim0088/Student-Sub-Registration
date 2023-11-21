package com.example.student1.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student1.*;
import com.example.student1.Users;
import com.example.student1.service.UsersSevice;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/user")
public class UsersController {

    @Autowired
    private UsersSevice userservice;

    @PostMapping("/Branch/{branchId}/User")  // Corrected URL path
    public ResponseEntity<Users> saveStudent(@RequestBody Users user, @PathVariable Long branchId) throws Exception {
    	 Set<UserRole> roles = new HashSet<>();
 	    Role role = new Role();
 	    role.setRoleId(45L);
 	    role.setRoleName("NORMAL");
 	    UserRole userRole = new UserRole();
 	    userRole.setUser(user);
 	    userRole.setRole(role);
 	    roles.add(userRole);
        return new ResponseEntity<Users>(userservice.saveStudent(user, branchId, roles), HttpStatus.CREATED);
    	
    }
    @GetMapping
	public List<Users> getAllUser(){
		return userservice.getAlluser();
		
	}
    @GetMapping("User/{id}")
	public ResponseEntity<Users>getEmp(@PathVariable("id")Long userid){
		return new ResponseEntity<Users>(userservice.getStudentById(userid),HttpStatus.OK);
	}
    @PutMapping("User/{id}")
	 public ResponseEntity<String> updateUser(@RequestBody Users user,@PathVariable("id")Long uid){
		userservice.getUpdateStudent(user, uid);
		 return new ResponseEntity<String> ( "Update successfuly !!!!",HttpStatus.OK);
		 
	 }
	@DeleteMapping("User/{id}")
	public ResponseEntity<String>deleteStudent(@PathVariable("id")Long studID){
		userservice.getDeleteStudent(studID);
		return new ResponseEntity<String>("Delete Successfuly",HttpStatus.OK);
    
	}
    
    
}
