// pages/reserve/reserve.js
Page({

  /**
   * Page initial data
   */
  data: {
    index: 0,
    multiIndex: [0, 0, 0],
    date: '2019-09-01',
    color: '#888888'
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      color: '#000000'
    })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
      wx.setNavigationBarTitle({
        title: '缆车预订',
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