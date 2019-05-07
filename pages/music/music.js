// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peop:[],
    arr:[],
    music:[],
    flag:true,
    ge:true,
    play:true,
    i:1,
    sers:[],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
  },
  
  audioPlay() {
    this.setData({
      play:!this.data.play
    })
    this.audioCtx.play()
  },
  audioPause() {
    this.setData({
      play: !this.data.play
    })
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  inp:function(e){
    console.log(e.detail.value)
    if (e.detail.value){
      wx.request({
        url: 'http://gaocaipeng.com:3000/search',
        data: {
          keywords: e.detail.value
        },
        success: (res) => {
          this.setData({
            sers: res.data.result.songs
          })
          console.log(this.data.sers)
        }
      })
    }else{
      this.setData({
        sers: []
      })
      console.log(this.data.sers)
    }
    
  },
  mus:function(){
    this.setData({
      flag:true,
      ge:true
    })
  },
  ser:function(){
    this.setData({
      flag:false,
      ge:false
    })
  },
  tap:function(e){
    console.log()
    let obj = {
      img: e.currentTarget.dataset.item.avatar_big,
      name: e.currentTarget.dataset.item.name
    }
    wx.navigateTo({
      url: '/pages/musicXiang/musicXiang?obj=' + JSON.stringify(obj)  ,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  lower:function(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout( ()=> {
      wx.hideLoading();
      this.setData({
        i: ++this.data.i
      })
      this.setData({
        arr: this.data.peop.slice(0, 10*this.data.i)
      })
    }, 2000)
    
    
  },
  
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&format=json?=1&offset=0&limit=100',
      success:(res)=>{
        this.setData({
          peop:res.data.artist
        })
        this.setData({
          arr:this.data.peop.slice(0,10)
        })
       
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