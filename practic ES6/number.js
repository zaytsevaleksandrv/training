const random = document.getElementById('random');

async function *getNumber(){
    let url = "https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new";

    while (true){
        let response = await fetch(url);
        let text = await response.text();
        yield text;

    }
}

async function setNumber(){
    let count = 0;
    for await(let i of getNumber()){
        random.appendChild(getTemplate(i));
        count++;

        if (count == 10) {
            break;
        }
    }
}

function getTemplate( number ) {
    let div = document.createElement('div');
    div.innerHTML = number;
    return div;
}

setNumber();