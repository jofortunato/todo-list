const dbConnect = (model, defaultStorage = []) => {

    const getData = () => {
        let localStorageString = localStorage.getItem(model) || "[]";
        if (localStorageString) {
            return JSON.parse(localStorageString);
        }

        return [...defaultStorage];
    };

    let storage = getData();

    const setData = (data, index = storage.length) => {
        storage[index] = data;
        localStorage.setItem(model, JSON.stringify(storage));
    }

    const delData = index => {
        if (index >= storage.length) {
            return false
        }

        storage = storage.slice(0, index).concat(storage.slice(index+1));
        localStorage.setItem(model, JSON.stringify(storage));
    }
    
    return {getData, setData, delData}
};

export default dbConnect