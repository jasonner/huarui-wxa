const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}



// /**
//    * 手机号码校验
//    * 		
//    */
// const isMobile = (numStr, errMsg)=> {
//   if (typeof errMsg == "undefined") {
//     errMsg = '你输入的手机号码格式不正确';
//   }
//   if (!/^(13|15|18|14|17)\d{9}$/.test(numStr)) {
//     wx.showModal({
//       title: '提示',
//       content: errMsg
//     })
//     return false;
//   }
//   return true;
// }

/*获取当前页带参数的url参数信息*/
 const getCurrentPageUrl = () => {
  var pages = getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  console.log(currentPage)
  var url = currentPage.route    //当前页面url
  console.log(url)
  var options = currentPage.options    //如果要获取url中所带的参数可以查看options
  console.log(options)
  return options
}
 /*获取当前页带参数的url*/
 function getCurrentPageUrlWithArgs() {
   var pages = getCurrentPages()    //获取加载的页面
   var currentPage = pages[pages.length - 1]    //获取当前页面的对象
   var url = currentPage.route    //当前页面url
   var options = currentPage.options    //如果要获取url中所带的参数可以查看options

   //拼接url的参数
   var urlWithArgs = url + '?'
   for (var key in options) {
     var value = options[key]
     urlWithArgs += key + '=' + value + '&'
   }
   urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
   console.log(urlWithArgs)
   return urlWithArgs
 }


module.exports = {
  formatTime: formatTime,
  // isMobile: isMobile
  getCurrentPageUrl: getCurrentPageUrl,
  getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs
}
