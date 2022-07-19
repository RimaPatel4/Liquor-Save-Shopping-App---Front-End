document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const btn = document.querySelector('.open__scanner__btn');

btn.addEventListener('click', function () {

    fetch('/index', {
        headers : {
            'Content-Type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify( {
            'name' : 'Titos Vodka',
            'price' : '$20'
        })
    })
    .then(function (response){

        if(response.ok) {
            response.json()
            .then(function(response) {
                console.log(response);
            });
        }
        else {
            throw Error('Something went wrong');
        }
    })
    .catch(function(error) {
        console.log(error);
    });
});