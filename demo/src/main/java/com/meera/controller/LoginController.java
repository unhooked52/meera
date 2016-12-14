package com.meera.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.meera.models.LoginDetails;

@RestController
public class LoginController {

	@RequestMapping(value="/getUserDetails",name="/getUserDetails", method=RequestMethod.GET)
	public @ResponseBody LoginDetails getUserDetails() {
		return new LoginDetails("rshelar", "DreamBig123", "admin", "992323232");
	}
}
