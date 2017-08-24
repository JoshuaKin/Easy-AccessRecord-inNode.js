function WhoEnter(){
    this.run=function(file,pathname){
        var fs=require("fs");
        var os=require("os");
        var data="";
        var readerStream=fs.createReadStream(file);
        readerStream.setEncoding("UTF8");
        readerStream.on("data",function(chunk){
            data+=chunk;
        });
        readerStream.on("end",function(){
            // console.log(data);
            writeStream();
        });
        readerStream.on("error",function(err){
            console.log(err.stack);
        });
        function writeStream(){
            var nowdate=new Date().toLocaleDateString();
            var nowtime=new Date().toLocaleTimeString();
            var subdata=data+"\n"+"访问请求路径："+pathname+" 已接收"+'\n'+"访问用户："+" "+os.platform()+'\n'+"访问日期："+nowdate.toString()+"  "+nowtime.toString();
            var  writeStream=fs.createWriteStream(file);
            writeStream.write(subdata,"UTF8");
            writeStream.end();
            writeStream.on("finish",function(){
            // console.log('写入完成');
            });
            writeStream.on("error",function(){
            console.log(error.stack);
            });
        }
    }
}
module.exports=WhoEnter;
