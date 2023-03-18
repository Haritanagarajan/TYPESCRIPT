interface details{
    name:string
    age:number
}
function getdata():Promise<details[]>{
    return fetch('user.json')
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        return res as details[]
    })
}
getdata();