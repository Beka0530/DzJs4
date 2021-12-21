const input = document.querySelector('input')
const name = document.querySelector('#name')
const region = document.querySelector('#region')
const subregion = document.querySelector('#subregion')
const capital = document.querySelector('#capital')
const flag = document.querySelector('#flag')
const getCountry = () => {
    if (input.value.length > 0) {
        fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) => {
            data.json().then(elem => {
                    console.log(elem);
                    name.innerText = elem[0].altSpellings[2];
                    region.innerText = elem[0].region;
                    subregion.innerText = elem[0].subregion;
                    capital.innerText = elem[0].capital;
                    const flagImg = document.createElement(`img`);
                    flagImg.setAttribute(`src`, elem[0].flags.png);
                    flag.append(flagImg);
                    console.log(input.value.length);
            });
        });
    }
}
getCountry()





