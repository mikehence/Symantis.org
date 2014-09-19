//AccessService.js

module.exports = {

    checkAccessArea: function(isAuthenticated, route) {
        var requiresAccess = ['/me', '/me/*'];
        var access = true;
        
        for(var i in requiresAccess){
        	if(route.regexp.test(requiresAccess[i])){
        		access = false;
        	}
        }

        if(!isAuthenticated && !access){
            return false; 
        }
        return true;
    }
};