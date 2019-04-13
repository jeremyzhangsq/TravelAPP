//index.js
// //获取应用实例
// const app = getApp()

Page({
  data: {
    artlist : [
      { "title": "test12131231", "abstract": "123123", "id": 14, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 1, "isMain": 1 },
      { "title": "jeremy", "abstract": "aaaa", "id": 10, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 6, "isMain": 1 },
      { "title": "a", "abstract": "123123", "id": 1, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 0 },
      { "title": "b", "abstract": "aaaa", "id": 12, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 1, "isMain": 0 },
      { "title": "c", "abstract": "123123", "id": 4, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 2, "isMain": 0 },
      { "title": "d", "abstract": "aaaa", "id": 3, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 3, "isMain": 0 },
      { "title": "e", "abstract": "123123", "id": 2, "image": 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', "page": "guides/article/14_test12131231.html", "type": 4, "isMain": 1 },
      { "title": "fy", "abstract": "aaaa", "id": 11, "image": 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', "page": "guides/article/10_jeremy.html", "type": 5, "isMain": 0 }
    ],
    MainPage: [
      { "title": "test12131231", "abstract": "123123", "id": 14, "image": 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', "page": "guides/article/14_test12131231.html", "type": 1, "isMain": 1 },
      { "title": "jeremy", "abstract": "aaaa", "id": 10, "image": 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', "page": "guides/article/10_jeremy.html", "type": 6, "isMain": 1 }],
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
    let mp = that.data.MainPage
    let arts = that.data.artlist
    for(var i=0;i<arts.length;i++){
      if(arts[i].isMain==1){
        mp.push(arts[i])
      }
    }
    that.setData({mp})
    console.log(that.data.MainPage)
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
