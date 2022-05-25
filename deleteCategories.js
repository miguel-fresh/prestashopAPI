import { api } from './index';


const deleteCategoryRange = (range) => {
    const [from, to] = range;
    for (let i = from; i <= to; i++) {
        console.log(`deleting category ${i}`);
        api.delete(`categories/${i}`)
            .then(res => console.log(`Deleted category ${i}`))
            .catch(err => console.log(`error deleting category ${i}: `, err.message));
    }
}


const argvs = process.argv;

const range = [argvs[2], argvs[3]].map(n => parseInt(n));

console.log(`Range: ${range}`);
deleteCategoryRange(range);