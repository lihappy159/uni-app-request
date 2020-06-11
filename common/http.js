
//引用request.js
var request = require('./request.js')

//调用方法 👇 我把url放在单独的js 这样方面后续管理
var getToken = function(e){
	return request.getRequest('http://xxxxxxx',e);
}


module.exports = {
	apiRequest
}
