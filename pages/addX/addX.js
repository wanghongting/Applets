// pages/addX/addX.js
const date = new Date()
const years = []
const months = []
const days = []
const hours = [];
const mounds = [];
for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
for (let i = 1; i <= 24; i++) {
  hours.push(i)
}
for (let i = 1; i <= 60; i++) {
  mounds.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557047333021&di=a7f6cac4f32a62c7b501e48f1e8e7d43&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201606%2F14%2F20160614033624_ucFJG.thumb.700_0.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557047445351&di=05cdb418a337efeff54952b6ecc59518&imgtype=0&src=http%3A%2F%2Fimg.besoo.com%2Ffile%2F201608%2F19%2F1305138145908.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557047470846&di=ecde4554d895ff147059ff673e2b716c&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201701%2F19%2F66fc342dbd0cb18187b92ac50cc4eb45.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557047501622&di=b0d459b31bbd0b1ca6e5c23412a1f1a2&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201506%2F18%2F20150618192325_RYAWh.thumb.700_0.jpeg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2021392804,1143742941&fm=26&gp=0.jpg"],
    backs: [{ color: "#ffffff", bac:"#83d2de"},
      { color: "#040506", bac: "#f4f07d" },
      { color: "#656565", bac: "#ceecf9" },
      { color: "#656565", bac: "#c6dae3" },
      { color: "#ffffff", bac: "#659ad0" }],
    src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557047333021&di=a7f6cac4f32a62c7b501e48f1e8e7d43&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201606%2F14%2F20160614033624_ucFJG.thumb.700_0.jpeg",
    ins:-1,
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    hours,
    hour: 1,
    mounds,
    mound: 1,
    time: "",
    value: [9999, 1, 1],
    hide: true,
    title:"",
    content:"",
    arr:[],
    bs:"",
    cos:""
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      hour: this.data.hours[val[3]],
      mound: this.data.mounds[val[4]],
    })
  },
  chiose: function () {
    this.setData({
      hide: false
    })
  },
  cancle: function () {
    this.setData({
      hide: !this.data.hide
    })
  },
  shuer: function () {

    this.setData({
      time: this.data.year + "-" + this.data.month + "-" + this.data.day + "    " + this.data.hour + ":" + this.data.mound
    })
    this.setData({
      hide: !this.data.hide
    })
  },
  huan:function(e){
    let s = e.target.dataset.i;
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: this.data.backs[s].bac,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    this.setData({
      src:this.data.imgs[s],
      bs: this.data.backs[s].bac
    })
    this.setData({
      ins:s,
      cos:"#ffffff"
    })
  },

  //选取相片
  chooseImage:function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:(res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        this.data.arr.push(tempFilePaths);
        this.setData({
          arr:this.data.arr
        })
      }
    })
  },
  title:function(e){
    
    this.setData({
      title:e.detail.value
    })
  },
  content:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  save:function(){
    let obj = {
      title:this.data.title,
      time:this.data.time,
      content:this.data.content,
      background:this.data.src,
      arr:this.data.arr,
      bs:this.data.bs
    };

    let msg = wx.getStorageSync("list") || [];
    msg.push(obj)
    wx.setStorageSync("list",msg);
    wx.navigateBack({
      url: '/pages/indXing/indXing'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: this.data.backs[0].bac,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})