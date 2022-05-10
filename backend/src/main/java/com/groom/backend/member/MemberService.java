package com.groom.backend.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
	@Autowired
	MemberDAO dao;
	
	public int signup(MemberVO vo) {
		return dao.signup(vo);
	}
}
