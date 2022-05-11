package com.groom.backend.member;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@PostMapping("/login")
	public MemberVO login(@RequestBody MemberVO vo, HttpSession session) {
		MemberVO user=service.login(vo);
		if(user!=null) {
			session.setAttribute("logId", vo.getUser_id());
		}
		return user;
		
	}
	
	@GetMapping("/loginCheck")
	public int loginCheck(HttpSession session) {
		String user_id=(String)session.getAttribute("logId");
		return (user_id==null)? -1: 1;
	}
	
	@GetMapping("/logout")
	public int logout(HttpSession session) {
		session.invalidate();
		return 1;
	}

}