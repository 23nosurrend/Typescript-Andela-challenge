function revered(str:string):string{
    let result:string[]=str.split("")
    let arr2:string[]=[]
    for(let i=result.length-1;i>=0;i--){
      arr2.push(result[i])
      
    }
    return arr2.join("")
  }
  console.log(revered("keynes"))