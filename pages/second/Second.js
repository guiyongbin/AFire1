// pages/second/Second.js
const url1 = 'http://c.m.163.com/nc/article/headline/T1348647909107/0-20.html';
var i = 0;
//请求数据
function getData(url,Page) {
  wx.request({
    url: url,
    data: {},
    method: 'GET',
    
 

    success: function (res) {
      console.log(res)
      if(res.data!=[]){
        Page.setData({
          searchLoading: true, //"上拉加载"的变量，默认false，隐藏  
        
        
          sliderData: res.data.T1348647909107[0].ads.concat(res.data.T1348647909107[0].ads),
    
          itemData: res.data.T1348647909107.concat(res.data.T1348647909107),
          searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
      
        });
      }else{
        Page.setData({
          //searchLoading: true, //"上拉加载"的变量，默认false，隐藏  
          searchLoadingComplete: true,  //“没有数据”的变量，默认false，隐藏  

        });
      }
     
    }
  })
};

function loadingMoreEvent(Page){

  var url = 'http://c.m.163.com/nc/article/headline/T1348647909107/'+i*20+'-'+(++i)*20+'.html'
  console.log(i);
  getData(url,Page);
}



Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    sliderData: {}, //轮播图数据
    itemData:{},
    searchLoading: false, //"上拉加载"的变量，默认false，隐藏  
    searchLoadingComplete: false  //“没有数据”的变量，默认false，隐藏  
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
   var that = this;
    getData(url1,that);
  
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
    var that = this;
    loadingMoreEvent(that);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  }
})
 