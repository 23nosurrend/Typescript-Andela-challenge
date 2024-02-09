function arrange(arr1:number[],arr2:number[]):number[]{
    let arr:number[]=arr1.concat(arr2)
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let found=arr[j]
                //let exchange
                arr[j]=arr[j+1]
                arr[j+1]=found
            }
        }
    }
    return arr
}
console.log(arrange([4,5,6],[0,1,2,3]))