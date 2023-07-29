module.exports = app =>{
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const CinemaTypeSchema = new Schema({
    name:{type:String},//名称
    pid:{type:String,default:null},//父级id
    level:{type:Number,default:1},//等级
    sort:{type:Number},//排序
    create_time:{type:String},//创建的时间
  })  

  return mongoose.model('CinemaType',CinemaTypeSchema)
}