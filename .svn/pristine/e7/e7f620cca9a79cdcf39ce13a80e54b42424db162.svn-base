// pages/demo/demo.js
const hrp = require('../../api/hrp.js')
import http from '../../utils/http.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeInfo: {
      showTip: {
        isShow: false,
        url: '',
        msg: ''
      },
      loopPlayList: [],
      specialProductList: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    http.all([hrp.homeInfo({}), hrp.homeInfo({})]).then((data)=>{
      console.log(data)
    })

    hrp.homeInfo({}).then((data) => {
      // 轮播图
      if (data.loopPlayList && data.loopPlayList.length > 0) {
        this.setData({
          'homeInfo.loopPlayList': data.loopPlayList
        })
      }

      // 产品精选
      if (data.specialProductList && data.specialProductList.length > 0) {
        this.setData({
          'homeInfo.specialProductList': data.specialProductList
        })
      }
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