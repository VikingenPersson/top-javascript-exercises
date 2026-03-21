const removeFromArray = function(array, ...itemsToRemove) {
    for (let item of itemsToRemove){
        while (array.includes(item)){
            array.splice(array.findIndex(arrayItem => arrayItem === item), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
