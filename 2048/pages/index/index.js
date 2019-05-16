const app = getApp()
const GameManager = require('./game_manager.js')
Page({
  data: {
    grids: [
      // [null,null,null,null],
      // [null,null,null,null],
      // [null,null,null,null],
      // [null,null,null,null],
    ]
  },
  gameManager: null,
  //开始时候的坐标
  touchStartClientX: 0,
  touchStartClientY: 0,
  touchEndClientX: 0,
  touchEndClientX: 0,
  onLoad: function () {
    this.gameManager = new GameManager(4);
    const grids = this.gameManager.setup();
    this.setData({
      grids
    })
  },
  touchStart(event) {
    // console.log('touchStart')
    //触点 ： 和手机接触 的东西
    const touch = event.touches[0];//很多根手指，只获取第一根
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;

  },
  touchMove(event) {
    // console.log('touchMove');
    const touch = event.touches[0];//很多根手指，只获取第一根
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },
  touchEnd(event) {
    // console.log('touchEnd');
    const touch = event.changedTouches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
    const dx = this.touchEndClientX - this.touchStartClientX;
    const dy = this.touchEndClientY - this.touchStartClientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    console.log(absDy)
    if (Math.max(absDx, absDy) > 10) {
      console.log('滑动了')
      // 方向
      // 0 上 2 下 1 右 3 左
      const direction = absDx > absDy ?  (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0)
      this.gameManager.move(direction);
      
    }
  }
})