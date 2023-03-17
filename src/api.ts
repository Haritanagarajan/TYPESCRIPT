interface user {
    name: string
    age: number
}

function getUsers(): Promise<user[]> {

   
    return fetch('/src/user.json')
      
        .then(res => res.json())
        .then(res => {
            return res as user[]
        })
}



getUsers()
    .then(users => {

        console.log(users.map(u => u.name + ' ' + u.age + '\n').toString())
    })

function getfakeAPI() {
   
    fetch('https://fakestoreapi.com/products')
   
        .then(response => response.json())
        .then(json => console.log(json))
}

getfakeAPI();