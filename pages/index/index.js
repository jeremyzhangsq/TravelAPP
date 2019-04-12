//index.js
// //获取应用实例
// const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
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
