export const getDataFromLocalStorage = ():Array<string | null> => {
    let history:Array<string | null> = [];

        for (let i = 0; i < localStorage.length; i++) {
            let key:string|null = localStorage.key(i);
            if (key !== null) {
                history.push(localStorage.getItem(key));
            }
        }
    return history.reverse();
}