package com.myapp.groom;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;

@RestController
public class HelloController {
@GetMapping("/api/hello")
	public String hello(){
	return "�ȳ��ϼ���. ���� �����ð��� "+new Date() +"�Դϴ�. \n";
	}
}
