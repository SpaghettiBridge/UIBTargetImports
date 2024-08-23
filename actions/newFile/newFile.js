function filterItems(array, key) {
  return array.filter(item => {
    return !item[key].startsWith("DO NOT USE");
  });
}


function filterArray(array1, array2) {
    return array1.filter(obj1 => {
        return !array2.some(obj2 => 
            obj1.target_id === obj2.target_cache_id && 
            obj1.student === obj2.student_id
        );
    });
}