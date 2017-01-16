var postsData = require('../../data/posts-data.js')

Page({
  data:{
    posts_content:[]
  },
  onLoad:function(options){
      this.setData({
        posts_content:postsData.postLists
      })
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh")
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("页面触底")
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  onPostTap:function(e){
    var postId = e.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
    console.log(e)
    console.log(postId)
  }
})