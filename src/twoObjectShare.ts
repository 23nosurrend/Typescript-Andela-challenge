function number(obj1:Record<string,any>,obj2:Record<string,any>):boolean{
    let arr1=Object.keys(obj1)
    let arr2=Object.keys(obj2)
    for(let i=0;i<arr2.length;i++){
      if(arr1.includes(arr2[i])){
        return true
      }
    }
    return false
  }
  console.log(number({name:1,age:100},{name:1,age:100}))