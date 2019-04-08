// pages/list/list.js
Page({
 
  data:{
    artlist: [
      { art: "1111111111111111111111", img: "../../icon/People.png" },
      { art: "2222222222222222222222", img: "../../icon/People.png" },
      { art: "3333333333333333333333", img: "../../icon/People.png" },
      { art: "4444444444444444444444", img: "../../icon/People.png" },
      { art: "5555555555555555555555", img: "../../icon/People.png" },
      { art: "6666666666666666666666", img: "../../icon/People.png" }
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