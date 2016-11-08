"use strict";
const request = require('request-promise-native');

const sendRequest = (path, method, headers, data) => {
	if (method.toLowerCase() == "post")
	{
		var options = {
		    method: method.toUpperCase(),
		    uri: path,
		    body: data,
		    headers: headers,
		    json: true // Automatically stringifies the body to JSON
		};
	}
	return request(options)
}


class ClickATellRestApi {
	
	constructor(authToken, isXML) {
		this.authToken = authToken;
		this.version = 1;
		this.accept = (isXML)? "application/xml": "application/json",
		this.authorization = `Bearer ${authToken}`;
		this.url = `https://api.clickatell.com/rest/`
	}

	/**
	* @param [{String}] to - Array of string contains number to send message to
	* @param {String} message - The message to send
	* @returns {Promise}
	*/
	sendMessage(to, text) {
		let headers = {
			"Authorization" : this.authorization,
			"X-Version" : this.version,
			"Accept" : this.accept,
			"Content-type" : "application/json"
		}
		if (typeof to == "string"){
			to = [to]			
		}
		let body = {
			to,
			text
		}
		return sendRequest(`${this.url}message`,'POST', headers, body);
	}
}

module.exports = ClickATellRestApi;