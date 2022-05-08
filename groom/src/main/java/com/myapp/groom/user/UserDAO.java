package com.myapp.groom.user;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserDAO {
	public int join(UserVO vo);
	public UserVO login(UserVO vo);
}
