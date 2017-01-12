//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  onTap: function() {
    // wx.navigateTo({
    //   url: '../posts/post'
    // })
    wx.redirectTo({
      url: '../posts/post'
    })
  },
  onUnload: function () {
    console.log('onUnload')
  },
  onHide: function(){
    console.log('onHide');
  }
})
