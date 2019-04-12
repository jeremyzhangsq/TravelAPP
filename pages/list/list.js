// pages/list/list.js
var app = getApp();
Page({
 
  data:{
    focus: true,
    artlist: [
      { "title": "test12131231", "abstract": "123123", "id": 14, "image": "../../icon/People.png", "page": "guides/article/14_test12131231.html", "type": 1, "isMain": 1 },
      { "title": "jeremy", "abstract": "aaaa", "id": 10, "image": "../../icon/Map.png", "page": "guides/article/10_jeremy.html", "type": 6, "isMain": 1 },
      { "title": "a", "abstract": "123123", "id": 1, "image": "../../icon/People.png", "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 1 },
      { "title": "b", "abstract": "aaaa", "id": 12, "image": "../../icon/Map.png", "page": "guides/article/10_jeremy.html", "type": 1, "isMain": 1 },
      { "title": "c", "abstract": "123123", "id": 4, "image": "../../icon/People.png", "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 1 },
      { "title": "d", "abstract": "aaaa", "id": 3, "image": "../../icon/Map.png", "page": "guides/article/10_jeremy.html", "type": 3, "isMain": 1 },
      { "title": "e", "abstract": "123123", "id": 2, "image": "../../icon/People.png", "page": "guides/article/14_test12131231.html", "type": 4, "isMain": 1 },
      { "title": "fy", "abstract": "aaaa", "id": 11, "image": "../../icon/Map.png", "page": "guides/article/10_jeremy.html", "type": 5, "isMain": 1 }
    ],
    artIndex: 0,
    title:' ',
    type:-1,
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
  gotableinfo: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    console.log("index = ", index);
    wx.navigateTo({
      url: '../article/article?pageURL=' + this.data.artlist[index].page + '&title=' + this.data.artlist[index].title + '&id=' + this.data.artlist[index].id
    })
  }
  
})