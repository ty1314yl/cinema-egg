const Server = require('egg').Service
class cinemaImgServer extends Server{
  get cinemaImg(){
    return this.app.model.CinemaImg
  }
  async addcinemaImg(body){
    return this.cinemaImg.create({
      name:body.name,
      image:body.image,
      type_id:body.type_id,
      type_level:body.type_level,
      create_time:body.create_time
    })
  }
  async findCinemaImg(page,limit,id,sort={create_time:-1}){
    limit = Number(limit)
    const skip  = (page-1) * limit
    let match = {}
    if(id){
      match = {type_id:id}
    }
    const pipeline = [
      { $match: match},
      { $skip: skip },
      { $limit: limit },
      { $sort: sort }
    ]
    return this.cinemaImg.aggregate(pipeline)
  }
  async findCinemaImglength(id){
    let match = {}
    if(id){
      match = {type_id:id}
    }
    const pipeline = [
      { $match: match},
    ]
    return this.cinemaImg.aggregate(pipeline)
  }
  async delCinemaImg(id){
    return this.cinemaImg.deleteMany({_id:{$in: id}})
  }
}
module.exports = cinemaImgServer