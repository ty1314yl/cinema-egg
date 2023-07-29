const Controller = require('egg').Controller
class cinematypeController extends Controller {
  async findCinemaType(){//查找分类
    const body = this.ctx.request.body
    const cinematypeServer = this.service.cinematype
    const data=  await cinematypeServer.findCinemaType()
    if(data.length>0){
      this.ctx.body = {
        data:{
          status:200,
          message:'查找分类成功',
          data
        }
      }
    }else{
      this.ctx.body = {
        data:{
          status:202,
          message:'暂无数据',
        }
      }
    }
  }
  async createCinemaType(){//创建分类
    const body = this.ctx.request.body
    const cinematypeServer = this.service.cinematype
    const data  = await cinematypeServer.createCinemaType(body)
    this.ctx.body={
      data:{
        status:200,
        message:'创建分类成功',
        data
      }
    }

  }
  async delCinemaType(){//删除分类
    const body = this.ctx.query
    const cinematypeServer = this.service.cinematype
    const data = await cinematypeServer.delCinemaType(body)
    this.ctx.body={
      data:{
        status:200,
        message:'删除图片成功',
        data:data
      }
    }
  }
}

module.exports = cinematypeController;
