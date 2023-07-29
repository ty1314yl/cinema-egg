
const Controller = require('egg').Controller

const path = require('path');
const fs = require('mz/fs');
const pump = require('mz-modules/pump');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');
class UploadController extends Controller {
  //上传图片保存路径并返回
  async uploadcinemaimg() { 
    const { ctx } = this;
    const file = ctx.request.files[0];
    // 1.获取当前日期
    let day = sd.format(new Date(), 'YYYY-MM-DD'); 
    // 2.创建图片保存的路径
    let dir = path.join(this.config.uploadcinemaimgDir, day);
  
    await mkdirp.sync(dir); // 不存在就创建目录
    let date = Date.now(); // 毫秒数
    // 获取文件名称
    const filename = file.filename;
    const targetPath = path.join(dir, date + filename);
    // 读取文件
    const source = fs.createReadStream(file.filepath);
    // 创建写入流
    const target = fs.createWriteStream(targetPath);
    try {
      await pump(source, target);
    } finally {
      await ctx.cleanupRequestFiles();
    }
    this.ctx.body = {
      data: {
        status: 200,
        message: '写入成功',
        data: targetPath.replace(/app/, '')//去除路径的前缀'/app/'
      }
    }


  }
  async delcinemaimg(){
    const { ctx } = this;
    const body = ctx.request.body;
    // 获取要删除文件的路径
    const filePath = path.join('app/', body.file);
    // 删除文件
    try {
      fs.unlinkSync(filePath);
      this.ctx.body = {
        data: {
          status: 200,
          message: '文件已成功删除',
        }
      }
    } catch(err) {
      this.ctx.body = {
        data: {
          status: 404,
          message: '删除失败',
        }
      }
    }
  }
}

module.exports = UploadController;
