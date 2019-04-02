import scouts from "./data.js";
import { addTapesToStorage } from "./vhs_storage.js";

console.log(scouts);
//  alert(JSON.stringfy(scouts)); 

const section = document.querySelector('.vhs_store');

const createGendre = (gendre) => {
    const cardGendre = document.createElement('p');
    cardGendre.textContent = `${gendre}`;
    cardGendre.classList.add('scout_gendre');
    return cardGendre;
}

const createFavoriteButton = (onClickFn) => {
    const button = document.createElement('button')
    button.textContent = "wspieram"
    button.classList.add('like_button');
    button.onclick = onClickFn;
    return button;

}

const addToStorage = (name, id) => {
  addTapesToStorage(id);
}

const createTitleElement = (name, place) => {
    const scoutNameElement = document.createElement('h1');
    scoutNameElement.textContent = `${name} (${place})`
    return scoutNameElement;

}

const createPoster = (imgUrl) => {
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.classList.add('vhs_poster');
    return image;

}

const vhsCardElements = scouts.map(scout => {
    const vhsWrapper = document.createElement('div');

    vhsWrapper.setAttribute('class', 'vhs_wrapper');

    vhsWrapper.appendChild(createTitleElement(scout.name, scout.place))
    vhsWrapper.appendChild(createPoster(scout.image));
    vhsWrapper.appendChild(createGendre(scout.gendre));
 

    vhsWrapper.appendChild(createFavoriteButton (
        () => addToStorage(scout.name, scout.id)
        ));
 

    return vhsWrapper;
});

vhsCardElements.forEach(element => section.appendChild(element));

console.log(vhsCardElements);