// pages/list/list.js
var app = getApp();
Page({
 
  data:{
    focus: true,
    list: [],
    alist: [],
    artIndex: 0,
    searchValue: '',
    show: 0,
    type:1,
    title:'',
    timeChecked:false,
    topChecked:false,
    inputValue: ''
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (option) {
    var that = this
    that.setData({
      title:option.title,
    })
    wx.setNavigationBarTitle({
      title: option.title,
    })
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
            var abs = res.data[i][1];
            if(abs.length>25)
              abs = abs.substring(0,25)+"......"
            item.title = res.data[i][0];
            item.abstract = abs;
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
          alist:arr,
          type:option.type
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
    wx.navigateTo({
      url: '../article/article?pageURL='+this.data.list[index].page + '&title=' + this.data.title + '&id=' + this.data.list[index].id
    })
  }
  
})