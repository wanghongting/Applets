Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    obj: {},
    newArr:[
      {
        icon:"/imgs/sub/吃饭.png",
        name:"吃饭"
      }, 
      {
        icon: "/imgs/sub/唱歌.png",
        name: "唱歌"
      },
      {
        icon: "/imgs/sub/快递.png",
        name: "快递"
      },
      {
        icon: "/imgs/sub/户外.png",
        name: "户外"
      },
      {
        icon: "/imgs/sub/游戏.png",
        name: "游戏"
      },
      {
        icon: "/imgs/sub/生活用品.png",
        name: "生活"
      },
      {
        icon: "/imgs/sub/生活护理.png",
        name: "生活护理"
      },
      {
        icon: "/imgs/sub/生活用品.png",
        name: "生活用品"
      },
      {
        icon: "/imgs/sub/生活－充油卡.png",
        name: "冲油"
      },
      {
        icon: "/imgs/sub/生活－水电煤.png",
        name: "水电煤"
      },
      {
        icon: "/imgs/sub/电影.png",
        name: "电影"
      },

    ],
    newArr2: [
      {
        icon: "/imgs/shou/奖金.png",
        name: "奖金"
      },
      {
        icon: "/imgs/shou/我要收债.png",
        name: "收债"
      },
      {
        icon: "/imgs/shou/投资.png",
        name: "投资收入"
      },
      {
        icon: "/imgs/shou/除税利息收入.png",
        name: "利息"
      },
      {
        icon: "/imgs/shou/薪资.png",
        name: "薪资"
      }

    ],
    num: 0,
    show:true,
    shu:-1
  },
  zhi: function () {
    this.setData({
      flag: !this.data.flag,
      shu:-1
    })
  },
  shou: function () {
    this.setData({
      flag: !this.data.flag,
      shu: -1
    })
  },
  save: function () {
    console.log(12)
  },
  num:function(){
    this.setData({
      show:!this.data.show
    })
  },
  sure: function (e) {
    if(e.target.dataset.number === "sure"){
      this.setData({
        show: !this.data.show
      })
      return;
    }
    let num = this.data.num ? this.data.num + e.target.dataset.number:e.target.dataset.number;
 
    this.setData({
      num: num
    })
   
    
  },

  icons:function(e){
    let index=e.currentTarget.dataset.index;
    this.setData({
      shu:index
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