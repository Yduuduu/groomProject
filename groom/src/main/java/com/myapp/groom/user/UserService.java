package com.myapp.groom.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserDAO dao;
	
	public int join(UserVO vo) {
		return dao.join(vo);
	}
	public UserVO login(UserVO vo) {
		return dao.login(vo);
	}
}
