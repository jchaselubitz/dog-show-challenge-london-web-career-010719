const url = 'http://localhost:3000/dogs'


function getDogs() {
    fetch(url)
        .then(resp => resp.json())
        .then(dogs => {
            createList(dogs)
            state.dogs = dogs
        })
    }

function newDog(dog) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dog)
    }
    fetch(url, options)
    // .then(resp => resp.json())
    .then(getDogs)
}

function patchDog(dog) {
    const options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dog)
    }
    fetch(`http://localhost:3000/dogs/${dog.id}`, options)
   // .then(resp => resp.json())
   .then(getDogs)
}

function deleteDog(dogId) {
    const options = {
        method: 'DELETE',
    }
    fetch(`http://localhost:3000/dogs/${dogId}`, options)
   // .then(resp => resp.json())
   .then(getDogs)
}