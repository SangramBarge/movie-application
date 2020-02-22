export const addMovie =(moviename, movieprice) =>{

    return {
        
        type: "ADD",moviename,movieprice
        
    };
}

export const searchMovie = () => {

    return {
        type: "SEARCH"
    };
}

export const deleteUser = (name) =>{
    console.log('button cliucked'+name)
    return {
        type : "DELETE",name
    }
}