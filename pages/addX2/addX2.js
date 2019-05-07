// pages/addX2/addX2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:null,
    i:null
  },
  del:function(){
    let arr = wx.getStorageSync("list");
    arr.splice(this.data.i,1);
    wx.setStorageSync("list", arr);
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    })
    
    setTimeout(()=>{
      wx.navigateTo({
        url: '/pages/indXing/indXing',
      })
    },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let msg = wx.getStorageSync("list")[options.i]
    this.setData({
      msg:msg,
      i: options.i
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: msg.bs,
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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