// pages/list/list.js
var app = getApp();
Page({
 
  data:{
    focus: true,
    artlist: [
      { "title": "test12131231", "abstract": "123123", "id": 14, "image": "../../icon/People.png", "page": "guides/article/14_test12131231.html", "type": 1, "isMain": 1 },
      { "title": "jeremy", "abstract": "aaaa", "id": 10, "image": "../../icon/Map.png", "page": "guides/article/10_jeremy.html", "type": 1, "isMain": 1 }
    ],
    artIndex: 0,
    inputValue: ''
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {

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