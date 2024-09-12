package com.sec.hit;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.sec.hit.mapper")
@SpringBootApplication
public class SecretHApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecretHApplication.class, args);
	}

}
