'use strict';

myApp.service("apiHttpService", ['$http',
    function (http) { 
        return {
        	
        get : function(URL, opt, _success_cb, _error_cb) {
        	//var token = mobiCareService.getLoginParams();
        	//if(token != null && token != undefined){
        		//token = token.access_token;
            	//http.defaults.headers.common['Authorization'] = 'Bearer '+token;
        //	}
            var __api_root = "http://localhost:8080/demo/";
            //if(navigator.cookieEnabled){
            	http({
                    method : 'GET',
                    url : __api_root + URL,
                   // cache : true
                })
                .success(function(data, status, headers, config) {      
                    _success_cb(data);
                })
                .error(function(data, status, headers, config) {
                	//AuthFailedService.CheckAuthFailed(data.error);
                	if(null != data){
                		_error_cb(data.error);
                	}
                });
            //}else{
           // 	AuthFailedService.cookiesDisabled();
            //}
        },
        
        post : function(URL, opt, _success_cb, _error_cb) {
        	var __api_root = "http://localhost:8080/demo/";
         http({
                 method : 'POST',
                 url :  __api_root+URL,
                 data : opt,
                // cache : true
             })
             .success(function(data, status, headers, config) {
                 _success_cb(data);
             })
             .error(function(data, status, headers, config) {
            	// AuthFailedService.CheckAuthFailed(data.error);
            	 if(null != data){
                 _error_cb(data);
            	 }
             });
          
         },
         
         put : function(URL, opt, _success_cb, _error_cb) {
        	 var __api_root = "http://localhost:8080/demo/";
             
             http({
                 method : 'PUT',
                 url : __api_root + URL,
                 data : opt
             })
             .success(function(data, status, headers, config) {
                 _success_cb(data.length, data);
             })
             .error(function(data, status, headers, config) {
            	 if(null != data){
            		 _error_cb(data);
            	 }
             });
	         }
    };
}]);
