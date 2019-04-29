//index.js
// //获取应用实例
// const app = getApp()

Page({
  data: {
    list: [],
    MainPage: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 500,
    imgheights: 500,
    previousMargin: 0,
    nextMargin: 0,
    navbar: ['地图', '导览'],
    currentTab: 1

  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://borischen.cn/django/wx/article_list',
      data: {
        x: '',
        y: ''
      },
      success: function (res) {
        console.log(res.data)
        let arr = []
        for (var i = 0; i < res.data.length; i++) {
          let item = {}
          item.title = res.data[i][0];
          item.abstract = res.data[i][1];
          item.id = res.data[i][2];
          item.image = "https://borischen.cn/static/" + res.data[i][3];
          item.page = "https://borischen.cn/static/" + res.data[i][4];
          item.type = res.data[i][5];
          item.isMain = res.data[i][6];
          arr.push(item)
        }
        that.setData({
          list: arr
        })
        let mp = that.data.MainPage
        let arts = that.data.list
        for (var i = 0; i < arts.length; i++) {
          if (arts[i].isMain == 1) {
            mp.push(arts[i])
          }
        }
        that.setData({ MainPage: mp })
      },
      fail: function (res) {
        console.log("fail")
      }
    })
    
    
  },
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
  //响应点击导航栏
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem : that.data.navbar[that.data.currentTab]
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  click: function (e) {
    var that = this
    var index = parseInt(e.currentTarget.dataset.postId);
    console.log(index)
    for(var i=0;i<that.data.MainPage.length;i++){
      let item = that.data.MainPage[i]
      if(item.id == index){
        wx.navigateTo({
          url: '../article/article?pageURL=' + item.page + '&title=' + item.title + '&id=' + item.id
        })
      }
      
    }
    
  },
  jumpToTravel() {
    wx.navigateTo({
      url: '/pages/list/list?title=游记攻略&type=1',
    })
  },
  jumpToEvent() {
    wx.navigateTo({
      url: '/pages/list/list?title=活动发布&type=2',
    })
  }
  
})
