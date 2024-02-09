function capitalize(str:string):string{
    let arr:string[]=str.split(" ")
  for(let i=0;i<arr.length;i++){
      arr[i]=arr[i] [0].toUpperCase()+arr[i].substring(1).toLowerCase()
    
   }
   return arr.join(" ")
   
 }
 console.log(capitalize("i am"))