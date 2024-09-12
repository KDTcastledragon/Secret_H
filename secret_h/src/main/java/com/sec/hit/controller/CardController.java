package com.sec.hit.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/card")
public class CardController {

	@GetMapping("/shuffle")
	public ResponseEntity<?> postMethodName() {

		return ResponseEntity.ok(null);
	}
}
