
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

        // Create DOM elements
        const usersContainer =  document.createElement('div');
        usersContainer.classList.add('usersList')
        usersContainer.innerHTML = `${element.name} ${element.surname}`;
        users.append(usersContainer);

        if(element.status === true){
            usersContainer.classList.add('status-true')
        }else {
            usersContainer.classList.add('status-false')
        }

        // Change users status
        usersContainer.addEventListener('click', (event) => {
            console.log(event.target.classList[1]);
            if(event.target.classList[1] === 'status-true'){
                usersContainer.classList.remove('status-true')
                usersContainer.classList.add('status-false')
            } else {
                usersContainer.classList.remove('status-false')
                usersContainer.classList.add('status-true')
            }
        })

    })
}

usersData();




