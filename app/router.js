'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.prefix('/api/v1')//设置基础路径
  router.post('/uploadcinemaimg', controller.upload.uploadcinemaimg);//图片上传到文件夹
  router.get('/delcinemaimg', controller.upload.delcinemaimg);//图片从文件夹删除
  router.get('/findCinemaType', controller.cinematype.findCinemaType);//修改图片分类
  router.post('/createCinemaType',controller.cinematype.createCinemaType)//上传图片分类
  router.post('/addcinemaImg',controller.cinemaimg.addCinemaImg)//上传图片
  router.get('/findCinemaImg',controller.cinemaimg.findCinemaImg)//查找图片
  router.get('/findCinemaImglength',controller.cinemaimg.findCinemaImglength)//查找图片长度
  router.get('/delCinemaType',controller.cinematype.delCinemaType)//删除分类
  router.post('/delCinemaImg',controller.cinemaimg.delCinemaImg)//删除图片
};
