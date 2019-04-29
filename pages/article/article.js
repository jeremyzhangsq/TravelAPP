// pages/article/article.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * Page initial data
   */
  data: {
    pageURL:"https://borischen.cn/static/",
    title:" ",
    id:0
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      pageURL: options.pageURL,
      title: options.title,
      id: options.id
    });

    wx.request({
      url: that.data.pageURL,
      method: "get",
      success: function (res) {
        let data = res.data;
        console.log(data)
        let total_content = data; //接口中带html标签的内容
        /**
         * WxParse.wxParse(bindName , type, data, target,imagePadding)
         * 1.bindName绑定的数据名(必填)
         * 2.type可以为html或者md(必填)
         * 3.data为传入的具体数据(必填)
         * 4.target为Page对象,一般为this(必填)
         * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
         */

        WxParse.wxParse('article', 'html', total_content, that, 5);
      },
      fail(res) {
        wx.showModal({
          title: res.data.msg
        })
      }
    })
    console.log("id:",that.data.id)
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

  }
})