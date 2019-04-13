// pages/list/list.js
var app = getApp();
Page({
 
  data:{
    focus: true,
    artlist: [
      { "title": "test12131231", "abstract": "123123", "id": 14, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 1, "isMain": 1 },
      { "title": "jeremy", "abstract": "aaaa", "id": 10, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 6, "isMain": 1 },
      { "title": "a", "abstract": "123123", "id": 1, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 0 },
      { "title": "b", "abstract": "aaaa", "id": 12, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 1, "isMain": 0 },
      { "title": "c", "abstract": "123123", "id": 4, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 0 },
      { "title": "d", "abstract": "aaaa", "id": 3, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 3, "isMain": 0 },
      { "title": "e", "abstract": "123123", "id": 2, "image": 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', "page": "guides/article/14_test12131231.html", "type": 4, "isMain": 1 },
      { "title": "fy", "abstract": "aaaa", "id": 11, "image": 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', "page": "guides/article/10_jeremy.html", "type": 5, "isMain": 0 }
    ],
    artIndex: 0,
    title:' ',
    type:-1,
    timeChecked:false,
    topChecked:false,
    inputValue: ''
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (option) {

    // wx.request({
    //   url: 'http://borisChen.me/wx/article_list',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   },
    //   fail: function(res){
    //     console.log("fail")
    //   }
      
    // })
    // var json = {"title":"test12131231", "abstract":"123123", "id":14, "image":"guides/image/14.jpg","page":"guides/article/14_test12131231.html", "type":1,"isMain":1}
    // var that = this;
    // that.setData({
    //   title:json.title,
    //   abstract: json.abstract,
    //   id: json.id,
    //   image: "http://borisChen.me/static/"+json.image,
    //   page: "http://borisChen.me/static/" + json.page,
    //   type: json.type,
    //   isMain:json.isMain
    // })
    var that = this;
    that.setData({
      title:option.title,
      type:option.type
    })
    console.log(that.data.type)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
 
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  search () {
    this.setData({
      focus: true
    })
  },
  sortList1 (){
    var that = this
    that.setData({
      topChecked: false,
      timeChecked:true
    })
  },
  sortList2 () {
    var that = this
    that.setData({
      topChecked: true,
      timeChecked: false
    })
  },
  gotableinfo: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    console.log("index = ", index);
    wx.navigateTo({
      url: '../article/article?pageURL=' + this.data.artlist[index].page + '&title=' + this.data.artlist[index].title + '&id=' + this.data.artlist[index].id
    })
  }
  
})