// pages/list/list.js
Page({
 
  data:{
    artlist: [
      { art: "1111111111111111111111" },
      { art: "2222222222222222222222" },
      { art: "3333333333333333333333" },
      { art: "4444444444444444444444" },
      { art: "5555555555555555555555" },
      { art: "6666666666666666666666" }
    ],
    imglist: [
      { img: "../../icon/People.png" },
      { img: "../../icon/People.png" },
      { img: "../../icon/People.png" },
      { img: "../../icon/People.png" },
      { img: "../../icon/People.png" },
      { img: "../../icon/People.png" }
    ],
    focus: true,
    inputValue: ''
  },
  search () {
    this.setData({
      focus: true
    })
  }
  
})