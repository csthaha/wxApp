Page({
  onLoad: function () {
    this.popup = this.selectComponent('#popup')
  },
  showPopup() {
    //弹窗
    console.log('已经点击');

    this.popup.showPopup();

  },
  hidePopup() {
    //弹窗
    console.log('已经点击');

    this.popup.showPopup();

  },
  _error:function(){
    this.popup.hidePopup();
  },
  _success(){
    this.popup.hidePopup();
  },
  change(e){
    // console.log('catch')
    var mComponent = this.selectComponent('#myComponent');
    mComponent.setText('外部调用了');
  },
  onTextChange:function(e){
    wx.showToast({
      title:'捕获事件',
      
    })
  }
})