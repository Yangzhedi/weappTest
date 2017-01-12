Page({
  data:{
    posts_content:[]
  },
  onLoad:function(options){
      var posts_content = [
          {
              date:"Sep 18 2016",
              title:"正是虾肥蟹壮时",
              post_img:"/images/post/crab.png",
              author_img:"/images/avatar/1.png",
              content:"菊黄蟹正肥，品尝秋之味。徐志摩把，“看初花的狄路”和“到楼外楼吃蟹”，并列为秋天来杭州不能错过的事情。",
              view_num:"112",
              collect_num:"96",
          },{
              date:"Nov 25 2016",
              title:"比利·林恩的中场故事",
              post_img:"/images/post/bl.png",
              author_img:"/images/avatar/2.png",
              content:"菊黄蟹正肥肥，品尝秋之味。徐志摩把把，“看初花的狄路”和和“到楼外楼吃蟹”，并列为秋天来杭州不能错过的事情。",
              view_num:"112",
              collect_num:"96",
          },{
              date:"Nov 25 2016",
              title:"比利·林恩的中场故事",
              post_img:"/images/post/cat.png",
              author_img:"/images/avatar/3.png",
              content:"菊黄蟹正肥肥，品尝秋之味。徐志摩把把，“看初花的狄路”和和“到楼外楼吃蟹”，并列为秋天来杭州不能错过的事情。",
              view_num:"112",
              collect_num:"96",
          }
      ];
      this.setData({
        posts_content:posts_content
      })

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onReady")
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("onShow")
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide")
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload")
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh")
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom")
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})