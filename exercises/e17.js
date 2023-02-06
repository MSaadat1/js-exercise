export function minBy(array, cb) {
    if(!array.length){
        return undefined;
    }
    let min = array[0].age;
    let minElement = array[0];
    for(let i = 0; i < array.length; i++){
     if(cb(array[i]) < min){
      minElement = array[i];
      min = array[i].age
     }
    }
    return minElement;
}

export function maxBy(array, cb) {
    if(!array.length){
        return undefined;
    }
    let maxAge = array[0].age;
    let maxElement = array[0];
    for(let i = 1; i < array.length; i++){
     if(cb(array[i].age) >= maxAge){
      maxAge = array[i].age;
      maxElement = i;
     }
    }
    return array[maxElement];
}
