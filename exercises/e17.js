export function minBy(array, cb) {
    if(!array.length) return undefined;
    let min = array[0];
    for(let i = 0; i < array.length; i++){
     if(cb(array[i]) < cb(min)){
      min = array[i]
     }
    }
    return min;
}

export function maxBy(array, cb) {
    if(!array.length)return undefined;
    let maxAge = array[0];
    for(let i = 0; i < array.length; i++){
     if(cb(array[i]) > cb(maxAge)){
      maxAge = array[i];
     }
    }
    return maxAge;
}
