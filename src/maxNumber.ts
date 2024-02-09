function max(arr:number[]):number{
    let max:number=0
    for(let i=0;i<arr.length;i++){
      if(arr[i]>max){
        max=arr[i]
      }
    }
    return max
  }
  let final=max([1,2,3,4])
  console.log(final)