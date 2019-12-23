$(() => {
    $('#numOfDogsForm').submit(e => {
        e.preventDefault();
        let numDogs = $('#numOfDogs').val();
        fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
            .then(res => res.json())
            .then(results => {
                console.log(results.message);
                let dogImages = results.message.map(dog => displayDog(dog)).join('');
                $('#dog-list').html(dogImages);
            })
            .catch(e => console.log(e))
    });
})

const displayDog = dogImg => {
    return `<li><img src="${dogImg}" alt="photo of a random dog"></li>`;
}
