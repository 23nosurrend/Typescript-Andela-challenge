function removeDuplicate(arr:number[]):number[]{
    let final:number[]=[]
    for(let i=0;i<arr.length;i++){
      if(!final.includes(arr[i])){
        final.push(arr[i])
      }
    }
    return final
  }
  console.log(removeDuplicate([1,1,2,3,5,6,1]))