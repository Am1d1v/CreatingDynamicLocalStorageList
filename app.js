
const url = ('users.json');
const users = document.querySelector('.users');


// Fetch users data
async function usersData(){
    const usersJson = await fetch(url);
    const usersList = await usersJson.json();
    console.log(usersList);

    usersList.forEach((element, index) => {
        // Check users status
        if(element.status === true){
            console.log(element);

            // Add users in local storafe list
            localStorage.setItem(`User ${index}`, JSON.stringify(element))
        }

        const usersContainer =  document.createElement('div');
        usersContainer.classList.add('usersList')
        usersContainer.innerHTML = `${element.name} ${element.surname}`;
        users.append(usersContainer);

        if(element.status === true){
            usersContainer.classList.add('status-true')
        }else {
            usersContainer.classList.add('status-false')
        }
    })
}
usersData();


