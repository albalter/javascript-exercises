const getTheTitles = function(books) {
    return books.reduce((arr,current,i)=> {
        arr[i] = current.title
        return arr
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;
