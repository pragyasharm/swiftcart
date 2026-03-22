export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getLocalStorage = (key) => {
    let data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
    return data
}