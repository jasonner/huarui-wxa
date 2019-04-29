const customer = require('../api/customer.js')

const checkLogin = function(){
  return new Promise((resolve, reject) => {
    var token = wx.getStorageSync("token");
    var third = wx.getStorageSync("third");
    console.log(token);
    console.log(third);
    customer.accountCheck({
      "token": token,
      "third": third,
      // "isRefresh": 1
    }).then((data) => {
      if (data.third && data.token) {//还存在
        resolve({ isLogin: true })
      } else {
        if (data.third) {
          wx.removeStorageSync("token")
          customer.thirdLogin({ thirdToken: data.third, isLogin: '1', type: 'wxa' }).then((cont) => {
            if (cont.result == "0" && cont.token) {
              wx.setStorageSync("token", cont.token)
              resolve({ isLogin: true })
            } else {
              resolve({ isLogin: false})
            }
          })
        } else {
          //重新做授权
          wx.removeStorageSync("token")
          wx.removeStorageSync("third")

          wx.login({
            success: res => {
              if (res.code) {
                customer.thirdAuth({ "code": res.code, thirdType: "hrwxa" }).then((result) => {
                  if (result.thirdToken) {
                    wx.setStorageSync("third", result.thirdToken)
                    customer.thirdLogin({ thirdToken: result.thirdToken, isLogin: '1', type: 'wxa' }).then((cont) => {
                      if (cont.result == "0" && cont.token) {
                        wx.setStorageSync("token", result.token)
                        resolve({ isLogin: true })
                      } else {
                        resolve({ isLogin: false})
                      }
                    })
                  } else {
                    resolve({ isLogin: false})
                  }
                })
              } else {
                console.log('获取用户登录态失败！' + res.errMsg)
                resolve({ isLogin: false})
              }
            }
          })
        }
      }
    })

  })
}
  


module.exports = {
  checkLogin: checkLogin
}