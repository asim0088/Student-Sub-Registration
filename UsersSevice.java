package com.example.student1.service;



import java.util.List;
import java.util.Set;

import com.example.student1.UserRole;
import com.example.student1.Users;

public interface UsersSevice {

	public  Users saveStudent(Users student, Long branchId,Set<UserRole> userRole) throws Exception ;
	public List<Users> getAlluser();
	public Users getStudentById(Long id);
	
	public Users getUpdateStudent(Users student,Long id );
	public Users getDeleteStudent(Long id );
}
