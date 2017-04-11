const url = "/menu.json"

export default {
    get() {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.error("get menu faild!\n", err))
    }
}
