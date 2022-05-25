import { api } from "./index.js";

export const getCategoriesByIds = (ids, display = "[id, name, meta_description]") => {
    api.get('/categories', {
        params: {
            "filter[id]": "[" + ids.join(',') + "]",
            "display": display,
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err.message));
}



const argvs = process.argv;
const ids = argvs[2].split(',').map(n => parseInt(n));
const display = argvs[3];

display ? getCategoriesByIds(ids, display) : getCategoriesByIds(ids, display);