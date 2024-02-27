let albook=document.querySelector("#books")
let book=async()=>{
   try {
    let agree=await fetch("https://poetrydb.org/title/Ozymandias/lines.json")
     let alb=await agree.json()
     console.log(alb)
     alb[0].lines.map((v)=>{
     let div=document.createElement("div")
     let h1=document.createElement("h1")
     albook.append(div)
     div.append(h1)
     h1.innerHTML=v.alb
     })
   } catch (error){
      console.log(error.message)
   }
}
// book()