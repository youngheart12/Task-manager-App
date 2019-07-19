const caculateTip=(total,tipPercent=.25)=>total=total+(total*tipPercent)
const ftoC=(temp)=> (temp-32)/1.8

const ctoF=(temp)=>(temp*1.8)+32

 const add=(a,b)=>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             if(a<0 || b<0){
                 return reject('Number must be non-negative')
             }
             resolve(a+b)
         },2000)
     })
 }
module.exports={
    caculateTip,
    ftoC,
    ctoF,
    add
}