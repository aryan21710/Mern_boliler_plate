const path=require('path');
const pathToHtml=path.join(__dirname,'..','public','index.html')
console.log('pathToHtml',pathToHtml);
const signIn=(req,res)=>{
    res.sendFile(`${pathToHtml}`)
}


module.exports=signIn