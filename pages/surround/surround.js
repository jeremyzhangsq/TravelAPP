Page({
  data: {
    text: "This is surround data.",
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    
  },
  onReady: function () {
    // Do something when page show.
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '周边',
    })
    wx.showActionSheet({
      itemList: ['美食', '住宿', '纪念品', '周边'],
      itemColor: '#000000',
      success: function (res1) {
        console.log("tapIndex is ", res1.tapIndex)
        if (res1.tapIndex == 0) {
          wx.navigateTo({
            url: '../article/article',
          })
        }
      },
      fail(res1) {
        console.log(res1.errMsg)
      }
    })
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  }
})