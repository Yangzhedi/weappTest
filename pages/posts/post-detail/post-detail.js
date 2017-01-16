var postsData = require('../../../data/posts-data.js')

Page({
    data:{
        postData:{}
    },
    onLoad: function(option){
        var postId = option.id;
        var postData = postsData.postLists[postId];
        console.log(postData);
        this.setData({
            postData:postData
        })
    }
})