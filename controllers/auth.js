const path=require('path');
const pathToHtml=path.join(__dirname,'../public','index.html')
console.log('pathToHtml',pathToHtml);
const signIn=(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','index.html'))
}


module.exports=signIn