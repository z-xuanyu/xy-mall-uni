
import request from "../utils/http/request.js"


// 加入购物车
export function addCart(data) {
	return request.post('userCart', data)
}


// 获取购物车列表
export function getCartList() {
	return request.get('userCart');
}

// 删除购物车信息
export function removeCartInfo(id) {
	return request.delete(`userCart/${id}`)
}