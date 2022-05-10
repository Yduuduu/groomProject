package com.groom.backend.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member/")
public class MemberController {
	@Autowired
	MemberService service;
	
	@PostMapping("/signup")
	public int signup(@RequestBody MemberVO vo) {
		return service.signup(vo);
	}

}
