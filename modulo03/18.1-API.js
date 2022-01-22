const API_URL = 'https://jsonplaceholder.typicode.com/users'
async function getUsers () {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
    //data forEach((obj) => {
    //console.log(obj)
   // })
   const userEmails = data.map((obj) => {
   return {
   email: obj.email
   }
   })
   console.log(userEmails)
}
getUsers()