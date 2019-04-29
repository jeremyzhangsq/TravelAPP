// pages/article/article.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * Page initial data
   */
  data: {
    pageURL:"https://borischen.cn/static/",
    title:" ",
    name: '',
    author: '',
    atag: false,
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
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
    wx.request({
      url: 'https://borischen.cn/django/wx/article/'+this.data.id,
      method: "get",
      success: function (res) {
        let data = res.data
        console.log(data)
        if (data.audio != "") {
          that.setData({
            src: 'https://borischen.cn/static/'+data.audio,
            name: data.audio_title,
            atag:true
          })
        }
      },
      fail(res) {
        wx.showModal({
          title: res.data.msg
        })
      }
    })
    
  },
  

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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