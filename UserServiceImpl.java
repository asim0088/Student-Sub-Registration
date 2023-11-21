package com.example.student1.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.student1.Branch;
import com.example.student1.Role;
import com.example.student1.UserRole;
import com.example.student1.Users;
import com.example.student1.ResourseNotFound.ResourceNotFoundException1;
import com.example.student1.repository.BranchRepository;
import com.example.student1.repository.UserRoleRepo;
import com.example.student1.repository.UsersRepository;

@Service
public class UserServiceImpl implements UsersSevice {

	
	@Autowired
	private UsersRepository userRepo;
	
	@Autowired
	private BranchRepository branchRepo;
	
	@Autowired
	private UserRoleRepo userRoleRepo;
	@Override
	public Users saveStudent(Users student, Long branchId,Set<UserRole> userRoles) throws Exception {
		// TODO Auto-generated method stub
		Branch branch = this.branchRepo.findById(branchId)
	            .orElseThrow(() -> new ResourceNotFoundException1("branch", "branchId", branchId));
		 Users existingUser = userRepo.findByUserName(student.getUserName());
		    if (existingUser != null) {
		        throw new Exception("User with the same username already exists");
		    }

		    for (UserRole userRole : userRoles) {
		        Role role = userRole.getRole();
		        userRoleRepo.save(role);
		    }
		student.setBranchName(branch.getBranchName());
		student.setBranch(branch);
		
		return userRepo.save(student);
	}

	@Override
	public List<Users> getAlluser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public Users getStudentById(Long id) {
		// TODO Auto-generated method stub
		Optional<Users>user=userRepo.findById(id);
		if(user.isPresent()) {
			return user.get();
		}else {
			throw new ResourceNotFoundException1("Users", "id", id);
		}
	}

	@Override
	public Users getUpdateStudent(Users student, Long id) {
		// TODO Auto-generated method stub
		
		
		Users existingUser=userRepo.findById(id).orElseThrow(() ->new ResourceNotFoundException1("Users", "id", id));
		existingUser.setUserName(student.getUserName());
		existingUser.setPassword (student.getPassword());
		existingUser.setFirstName(student.getFirstName());
		existingUser.setLastName(student.getLastName());
		existingUser.setEmail(student.getEmail());
		existingUser.setPhone(student.getPhone());
		return existingUser;
	}

	@Override
	public Users getDeleteStudent(Long id) {
		// TODO Auto-generated method stub
		Users user=userRepo.findById(id).orElseThrow(() ->new ResourceNotFoundException1("Student", "id", id));
		if(user != null) {
			userRepo.deleteById(id);
		}
		return user;
	}

}
