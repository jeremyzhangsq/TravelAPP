// pages/reserve/reserve.js
Page({

  /**
   * Page initial data
   */
  data: {
    index: 0,
    multiIndex: [0, 0, 0],
    date: '2019-04-08',
    timestamp: 1554713898,
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
    var d = e.detail.value+" 12:00:00"
    console.log(d)
    var dateTmp = d.replace(/-/g, '/')   //为了兼容IOS，需先将字符串转换为'2018/9/11 9:11:23'
    var time = new Date(dateTmp).getTime()/1000
    console.log(time)
    this.setData({
      date: e.detail.value,
      timestamp: time,
      color: '#000000'
    })
    
    
  },
  submit:function (e){
  
    var that = this //创建一个名为that的变量来保存this当前的值  
    wx.request({
      url: 'https://borischen.cn/django/wx/appointment/',
      method: 'post',
      data: {
        name: that.data.name,
        id_card : that.data.id,
        phone : that.data.tel,
        date: that.data.timestamp
      },
      header: {
        // 'content-type': 'application/x-www-form-urlencoded'  //这里注意POST请求content-type是小写，大写会报错  
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' 
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