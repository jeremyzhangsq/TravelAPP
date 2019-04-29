// pages/list/list.js
var app = getApp();
Page({
 
  data:{
    focus: true,
    list: [],
    alist:[],
    artIndex: 0,
    title:' ',
    searchValue: '',
    show: 0,
    type:1,
    timeChecked:false,
    topChecked:false,
    inputValue: ''
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (option) {
    var that = this
    wx.request({
      url: 'https://borischen.cn/django/wx/article_list',
      data: {
        x: '',
        y: ''
      },
      success: function (res) {
        // console.log(res.data)
        let arr = []
        for(var i = 0;i<res.data.length;i++){
          if (res.data[i][5]==option.type){
            let item = {}
          item.title = res.data[i][0];
          item.abstract = res.data[i][1];
          item.id = res.data[i][2];
          item.image = "https://borischen.cn/static/"+res.data[i][3];
          item.page = "https://borischen.cn/static/"+res.data[i][4];
          item.type = res.data[i][5];
          item.isMain = res.data[i][6];
          arr.push(item)
          }
        }
        that.setData({
          list: arr,
          alist:arr
        })
        console.log(that.data.list)
      },
      fail: function(res){
        console.log("fail")
      }    
    })
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

  },
  search () {
    this.setData({
      focus: true
    })
  },
  suo: function (e) {
    let al = []
    var that = this
    console.log(that.data.searchValue)
    for(var i = 0;i<that.data.list.length;i++){
      let item = that.data.list[i]
      var str = item.title+item.abstract
      console.log(str)
      if (str.indexOf(that.data.searchValue) != -1) {
        al.push(item)
      }
    }
    console.log(al)
    that.setData({
      alist:al
    })
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    var that = this
    that.setData({
      searchValue: value,
    });
  },
  sortList1 (){
    var that = this
    that.setData({
      topChecked: false,
      timeChecked:true
    })
  },
  sortList2 () {
    var that = this
    that.setData({
      topChecked: true,
      timeChecked: false
    })
  },
  gotableinfo: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
    console.log("index = ", index);
    wx.navigateTo({
      url: '../article/article?pageURL='+this.data.list[index].page + '&title=' + this.data.list[index].title + '&id=' + this.data.list[index].id
    })
  }
  
})