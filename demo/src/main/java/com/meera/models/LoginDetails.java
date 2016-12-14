package com.meera.models;

public class LoginDetails {
	private String username;
	private String password;
	private String userType;
	private String contactNumber;

	public LoginDetails(String username, String password, String userType, String contactNumber) {
		super();
		this.username = username;
		this.password = password;
		this.userType = userType;
		this.contactNumber = contactNumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

}
