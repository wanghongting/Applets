//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgName: [
      "心情日记", "动感音乐", "梳理财务", "娱乐游戏"
    ],

  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  click: function(e) {
    let xb = e.currentTarget.dataset.i * 1;
    switch (xb) {
      case 0:
        wx.navigateTo({
          url: '/pages/indXing/indXing',
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/music/music',
        })
        break;
      case 2:
        wx.navigateTo({
          url: '/pages/cai/cai',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/indXing/indXing',
        })
        break;
    }
  }
})