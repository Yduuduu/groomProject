package com.myapp.groom.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/")
public class UserController {
	@Autowired
	UserService service;
	
	@PostMapping("/join")
	public int join(@RequestBody UserVO vo) {
		return service.join(vo);
	}
	
	@PostMapping("/login")
	public UserVO login(@RequestBody UserVO vo) {
		return service.login(vo);
	}

}
