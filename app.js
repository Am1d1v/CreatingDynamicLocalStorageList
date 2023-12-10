
const url = ('users.json');


// Fetch users data
async function usersData(){
    const usersJson = await fetch(url);
    const usersList = await usersJson.json();
    console.log(usersList);
}
usersData();




