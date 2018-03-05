const random = document.getElementById('random');

async function *getPicture(){
    let url = "https://api.randomuser.me/1.0/?results=1&nat=gb,us&inc=picture";

    while (true){
        let response = await fetch(url);
        let text = await response.text();
        yield JSON.parse(text).results[0].picture.large;
    }
}

async function setPicture(){
    let count = 0;
    for await(let i of getPicture()){
        random.appendChild(getTemplate(i));
        count++;

        if (count == 10) {
            break;
        }
    }
}

function getTemplate( src ) {
    let img = document.createElement('img');
    img.src = src;

    return img;
}

setPicture();