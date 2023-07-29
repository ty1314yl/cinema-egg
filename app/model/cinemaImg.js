module.exports = app =>{
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const CinemaImageSchema = new Schema({
    name:{type:String},//名称
    image:{type:String},//图片
    type_id:{type:String},//一级分类id
    type_level:{type:Number},
    create_time:{type:String},//创建的时间

  })  

  return mongoose.model('CinemaImage',CinemaImageSchema)
}