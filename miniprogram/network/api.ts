//引入请求方法
import network from './index'

// example
export function postLogin(params: object) {
  return network.post('/', params)
}