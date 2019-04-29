import WxRequest from '../assets/plugins/wx-request/lib/index'
import config from '../env/config.js'

class RestHttp extends WxRequest {
  constructor(options) {
    options = Object.assign({}, options, { suffix: '' })
    super(options)
    this.interceptors.use({
      request(request) {
        request.header = request.header || {}
        if (!request.header && !request.header['content-type']){
          request.header['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        if (request.url.indexOf('/restful') !== -1 && wx.getStorageSync('token')) {
          request.header.token = wx.getStorageSync('token')
        }
        if (request.data && request.data.type) {
        } else {
          if (request.data.type != ""){
            request.data.type = config.access_system_type.type;
          }else{
            delete request.data.type
          }
        }
        if (request.data && request.data.system){
        }else{
          if ( request.data.system != ""){
            request.data.system = config.access_system_type.system;
          }else{
            delete request.data.system;
          }
        }
        return request
      },
      requestError(requestError) {
        //wx.hideLoading()
        return Promise.reject(requestError)
      },
      
      response(response) {
        console.log(response);
        console.log(response.data.code);
        // wx.hideLoading()

        if (response.data && response.data.code === 0) {
          return response.data.content
        } else if (response.data && response.data.code === 40002) {
          wx.removeStorageSync('token')
          wx.redirectTo({
            url: '/pages/memberHome/memberHome'
          })
        } else {

        }
        return response
      },
      responseError(responseError) {
        //wx.hideLoading()
        return Promise.reject(responseError)
      },
    })
  }

}

export default new RestHttp()