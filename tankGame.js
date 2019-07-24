// 定义一个坦克对象
function HeroTank (x, y, speed,direct) {
  this.x = x || 12 
  this.y = y || 18
  this.speed = Math.abs(speed) || 1
  this.direct = direct || 0

  // 上移
  this.moveUp = function () {
    this.y -= this.speed
    this.direct = 0
  }
  // 右移
  this.moveRight = function () {
    this.x += this.speed
    this.direct = 1
  }
  // 下移
  this.moveDown = function () {
    this.y += this.speed
    this.direct = 2
  }
  // 左移
  this.moveLeft = function () {
    this.x -= this.speed
    this.direct = 3
  }
}

// 渲染坦克
function drawTank(tank) {
  switch (tank.direct) {
    case 0:
    case 2:
      // 设置颜色
      ctx.fillStyle = '#ded284'
      // 左边矩形
      ctx.fillRect(hero.x-12, hero.y-18, 6, 36)
      // 右边矩形
      ctx.fillRect(hero.x+6, hero.y-18, 6, 36)
      // 中间矩形
      ctx.fillRect(hero.x-5, hero.y-11, 10, 22)
      // 坦克的盖子
      ctx.fillStyle = '#ffd972'
      ctx.arc(hero.x, hero.y, 5, 0, 2*Math.PI, true)
      ctx.fill()
      // 炮筒
      ctx.beginPath()
      ctx.strokeStyle = '#ffd972'
      ctx.lineWidth = '2px'
      ctx.moveTo(hero.x, hero.y)
      if (tank.direct == 0) {
        ctx.lineTo(hero.x, hero.y-18)
      } else if (tank.direct == 2) {
        ctx.lineTo(hero.x, hero.y+18)
      }
      ctx.closePath()
      ctx.stroke()
      break
    case 1:
    case 3:
      // 设置颜色
      ctx.fillStyle = '#ded284'
      // 左边矩形
      ctx.fillRect(hero.x-18, hero.y-12, 36, 6)
      // 右边矩形
      ctx.fillRect(hero.x-18, hero.y+6, 36, 6)
      // 中间矩形
      ctx.fillRect(hero.x-11, hero.y-5, 22, 10)
      // 坦克的盖子
      ctx.fillStyle = '#ffd972'
      ctx.arc(hero.x, hero.y, 5, 0, 2*Math.PI, true)
      ctx.fill()
      // 炮筒
      ctx.beginPath()
      ctx.strokeStyle = '#ffd972'
      ctx.lineWidth = '2px'
      ctx.moveTo(hero.x, hero.y)
      if (tank.direct == 1) {
        ctx.lineTo(hero.x+18, hero.y)
      } else if (tank.direct == 3) {
        ctx.lineTo(hero.x-18, hero.y)
      }
      ctx.closePath()
      ctx.stroke()
      break
  }
}
