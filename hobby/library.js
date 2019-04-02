import { getTapesFromStorage, removeTapesFromStorage } from './vhs_storage.js';

const list = document.querySelector('.library');

const buildLibrary= () => {
const favoriteTapes = getTapesFromStorage();

const listItemElements = favoriteTapes.map(scout => {
    const listItem = document.createElement('li');
    listItem.classList.add('fav_item');
    const name = document.createElement('p');
    name.textContent = scout.name;



        const button = document.createElement('button')
        button.textContent = 'nie wspieram'
        button.classList.add('nie_wspieram_button');
        button.onclick = () => {
            removeTapesFromStorage(scout.id)

            while(list.firstChild) {
                list.removeChild(list.firstChild);
            }
          buildLibrary();  
        };


name.textContent = scout.name;


    listItem.appendChild(name);
    listItem.appendChild(button);
    return listItem;

})


listItemElements.forEach(item => {
    list.appendChild(item);

})

}

buildLibrary();

