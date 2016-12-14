package com.meera.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {

	
	@RequestMapping(value="/greet",name="/greet", method=RequestMethod.GET)
	public @ResponseBody String getGreeting(
			@RequestParam(name = "name", required = false, defaultValue = "World") String name) {
		return "Hello" + name;
	} 
}
