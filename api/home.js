import request from '@/utils/request.js';

//  获取home
export function getHomeData(params) {
	return request({
		method: 'get', // 请求方法
		url: '/api.php', // baseUrl 后面拼接的地址 不包含参数 也就是?后面的
		params // get 请求接受的参数 post为data
	})
}