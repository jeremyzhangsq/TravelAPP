// pages/reserve/reserve.js
Page({

  /**
   * Page initial data
   */
  data: {
    index: 0,
    multiIndex: [0, 0, 0],
    date: '2019-09-01',
    name: "",
    id: '',
    tel:'',
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
  nameInput: function (e) {
    var value = e.detail.value;
    console.log(e.detail.value)
    var that = this
    that.setData({
      name: value,
    });
  },
  idInput: function (e) {
    var value = e.detail.value;
    console.log(value)
    var that = this
    that.setData({
      id: value,
    });
  },
  telInput: function (e) {
    this.setData({
      tel: e.detail.value,
    });
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value,
      color: '#000000'
    })
  },
  submit:function (e){
  
    var that = this //创建一个名为that的变量来保存this当前的值  
    wx.request({
      url: 'https://borischen.cn/django/appointment/change_info',
      method: 'post',
      data: {
        name: that.data.name,
        id_card : that.data.id,
        phone : that.data.tel,
        date : that.data.date
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
      },
      success: function (res) {
        // that.setData({ //这里是修改data的值  
        //   test: res.data //test等于服务器返回来的数据  
        // });
        console.log(res.data)
      }
    });
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