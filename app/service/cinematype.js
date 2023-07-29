const Server = require('egg').Service
class cinematypeServer extends Server{
  get Cinematype(){
    return this.app.model.Cinematype
  }
  async findCinemaType(){
    return this.Cinematype.find({}).sort({sort:-1})
  }
  async createCinemaType(body){
    return this.Cinematype.create({
      name:body.name,
      pid:body.pid,
      level:body.level,
      sort:body.sort,
      create_time:body.createtime
    })
  }
  
  async delCinemaType(body){
    return this.Cinematype.deleteOne({_id:body._id})
  }

}
module.exports = cinematypeServer