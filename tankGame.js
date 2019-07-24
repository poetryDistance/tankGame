// 定义一个坦克父类，抽取坦克的公共属性和方法
class Tank {
  constructor (options) {
    this.x = options.x || 12 
    this.y = options.y || 18
    this.speed = Math.abs(options.speed) || 1
    this.direct = options.direct || 0
    this.color = options.color
  }
   // 上移
  moveUp () {
    this.y -= this.speed
    this.direct = 0
  }
  // 右移
  moveRight () {
    this.x += this.speed
    this.direct = 1
  }
  // 下移
  moveDown () {
    this.y += this.speed
    this.direct = 2
  }
  // 左移
  moveLeft () {
    this.x -= this.speed
    this.direct = 3
  }
}

// 定义子弹类
class Bullet {
  constructor (options) {
    this.x = options.x
    this.y = options.y
    this.direct = options.direct
    this.speed = options.speed || 1
    this.timer = null
    this.flag = true
  }
  runBullet () {
    if (this.x <= 0 || this.x >= 400 || this.y <= 0 || this.y >= 300) {
      clearInterval(this.timer)
      this.flag = false
    }
    switch(this.direct) {
      case 0:
        this.y -= this.speed
        break
      case 1:
        this.x += this.speed
        break
      case 2:
        this.y += this.speed
        break
      case 3:
        this.x -= this.speed
        break
    }
  }
}

// 定义 HeroTank 坦克类，用来渲染玩家控制的坦克
class HeroTank extends Tank {
  constructor(options) {
    super(options)
  }

  // 发射子弹
  shotEnemy() {
    // 创建子弹
    switch (this.direct) {
      case 0:
        heroBullet = new Bullet({ x: this.x-1, y: this.y-18, direct: this.direct })
        break
      case 1:
        heroBullet = new Bullet({ x: this.x+16, y: this.y-1, direct: this.direct })
        break
      case 2:
        heroBullet = new Bullet({ x: this.x-1, y: this.y+18, direct: this.direct })
        break
      case 3:
        heroBullet = new Bullet({ x: this.x-18, y: this.y-1, direct: this.direct })
        break
    }
    // 让子弹飞
    var timer = setInterval('heroBullet.runBullet()', 50)
    heroBullet.timer = timer
  }
  // 画出子弹
  drawHeroBullet() {
  if (heroBullet !== null && heroBullet.flag) {
    ctx.fillStyle = '#fef26e'
    ctx.fillRect(heroBullet.x, heroBullet.y, 2, 2)
  }
}
}

// 定义 EnemyTank 坦克类，用来渲染敌方坦克
class EnemyTank extends Tank {
  constructor(options) {
    super(options)
  }
}

// 画出坦克
function drawTank(tank) {
  switch (tank.direct) {
    case 0:
    case 2:
      // 设置颜色
      ctx.fillStyle = tank.color[0]
      // 左边矩形
      ctx.fillRect(tank.x-12, tank.y-18, 6, 36)
      // 右边矩形
      ctx.fillRect(tank.x+6, tank.y-18, 6, 36)
      // 中间矩形
      ctx.fillRect(tank.x-5, tank.y-11, 10, 22)
      // 坦克的盖子
      ctx.fillStyle = tank.color[1]
      ctx.arc(tank.x, tank.y, 5, 0, 2*Math.PI, true)
      ctx.fill()
      // 炮筒
      ctx.beginPath()
      ctx.strokeStyle = tank.color[1]
      ctx.lineWidth = '2px'
      ctx.moveTo(tank.x, tank.y)
      if (tank.direct == 0) {
        ctx.lineTo(tank.x, tank.y-18)
      } else if (tank.direct == 2) {
        ctx.lineTo(tank.x, tank.y+18)
      }
      ctx.closePath()
      ctx.stroke()
      break
    case 1:
    case 3:
      // 设置颜色
      ctx.fillStyle = tank.color[0]
      // 左边矩形
      ctx.fillRect(tank.x-18, tank.y-12, 36, 6)
      // 右边矩形
      ctx.fillRect(tank.x-18, tank.y+6, 36, 6)
      // 中间矩形
      ctx.fillRect(tank.x-11, tank.y-5, 22, 10)
      // 坦克的盖子
      ctx.fillStyle = tank.color[1]
      ctx.arc(tank.x, tank.y, 5, 0, 2*Math.PI, true)
      ctx.fill()
      // 炮筒
      ctx.beginPath()
      ctx.strokeStyle = tank.color[1]
      ctx.lineWidth = '2px'
      ctx.moveTo(tank.x, tank.y)
      if (tank.direct == 1) {
        ctx.lineTo(tank.x+18, tank.y)
      } else if (tank.direct == 3) {
        ctx.lineTo(tank.x-18, tank.y)
      }
      ctx.closePath()
      ctx.stroke()
      break
  }
}
