function convert(obj:Record<string,any>):any[]{
    let arr=[]
    for(let key in obj){
      arr.push([key,obj[key]])
      
    }
    return arr
  }
  console.log(convert({name:1,age:100}))
  