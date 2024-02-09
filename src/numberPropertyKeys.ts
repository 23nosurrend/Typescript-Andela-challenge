interface myObject{
    name:string,
    age:number
}





function objNumber(obj:myObject):number{
    let num=Object.keys(obj)
    return num.length

}
console.log(objNumber({name:"k",age:3}))