import scouts from "./data.js";

const STORAGE_KEY = "tapes";



export const addTapesToStorage = id => {
    const vhsToAdd = scouts.find(tape => tape.id = id);  //nazwa tape- NIE MA ZNACZENIA, bo jest zmienna wykorzystywana tylko w danej funckji, nie jest tak znaczaca dla calego programu
    const tapesInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(tapesInStorage) {
// tu bylo juz klikane na like
        tapesInStorage.push(vhsToAdd);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tapesInStorage));
    } else {
// a tu nie
        localStorage.setItem(STORAGE_KEY, JSON.stringify([vhsToAdd])); // zmienna (vhsToAdd) zmienilismy na tablice o jednym elemencie przez dodanie -> []    }


}
}

export const getTapesFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return dataStorage;
}

export const removeTapesFromStorage = (id) => {
    const tapesOutFromStorage = getTapesFromStorage();
    const NewArray = tapesOutFromStorage.filter(vhs => vhs.id != id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(NewArray));
 
}


