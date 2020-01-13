export const addMovie =(moviename, movieprice) =>{

    return {
        
        type: "ADD",
        payload: [{moviename,movieprice}]
    };
}

export const deleteMovie = () => {

    return {
        type: "DELETE"
    };
}

export const searchMovie = () => {

    return {
        type: "SEARCH"
    };
}