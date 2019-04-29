const app = getApp()
const util = require('../../utils/util.js')
const customer = require('../../api/customer.js')
const hrp = require('../../api/hrp.js')
import http from '../../utils/http.js'
// pages/failure/failure.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 支付结果信息
    applicationNo:'',
    insurePeriod:'',
    payMoney:'',
    insuredName:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取支付结果信息
    hrp.resultPage({ applicationNo: '', itemCode:''}).then((data) =>{
      console.log(data.applicationNo)
      this.setData({
        applicationNo: data.applicationNo,
        insurePeriod: data.insurePeriod,
        payMoney: data.payMoney,
        insuredName: data.insuredName
      })
    })
      
  },
  primary: function () {
    console.log(2)
    wx.redirectTo({
      url: '../myPolicy/myPolicy'
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})