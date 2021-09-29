import React, {createContext, useState, useEffect} from 'react';
import PostController from '../../Controller/PostController';

export const DataContext = createContext();

export const DataPosts = ({children}) => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        PostController.getAllPost()
        .then(posts => {
            setposts(posts);
            console.log(posts);
        }).catch(error => {
            console.log(error);
        });
      }, []);

    return (
        <div>
            <DataContext.Provider value = {{posts}}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

