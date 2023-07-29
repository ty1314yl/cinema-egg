const Controller = require('egg').Controller
class cinemaImgController extends Controller {
  async addCinemaImg(){//创建分类
    const body = this.ctx.request.body
    const cinemaImgServer = this.service.cinemaimg
    const data  = await cinemaImgServer.addcinemaImg(body)
    this.ctx.body={
      data:{
        status:200,
        message:'创建分类成功',
        data
      }
    }
  }
  async findCinemaImg(){//查找图片
    const body = this.ctx.query
    const cinemaImgServer = this.service.cinemaimg
    const data  = await cinemaImgServer.findCinemaImg(body.page,body.limit,body.id)
    this.ctx.body={
      data:{
        status:200,
        message:'查找图片成功',
        data
      }
    }
  }
  async findCinemaImglength(){//查找图片长度
    const body = this.ctx.query
    const cinemaImgServer = this.service.cinemaimg
    const data = await cinemaImgServer.findCinemaImglength(body.id)
    this.ctx.body={
      data:{
        status:200,
        message:'查找图片长度成功',
        data:data.length
      }
    }
  }
  async delCinemaImg(){//删除图片
    const body = this.ctx.request.body
    const cinemaImgServer = this.service.cinemaimg
    const data = await cinemaImgServer.delCinemaImg(body)
    this.ctx.body={
      data:{
        status:200,
        message:'删除图片成功',
        data:data
      }
    }
  }
}

module.exports = cinemaImgController;
