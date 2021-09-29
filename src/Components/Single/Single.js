import React, {useState, useEffect} from 'react'
import db from '../../firebase'
import HTMLReactParser from 'html-react-parser'

function Single({match}) {
    const [post, setpost] = useState([])
    useEffect(() => {
        const response = db.collection('blogs-list').where("id", "==", `${match.params.id}`);
        response.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((docs) =>{
          items.push(docs.data())
        })
        setpost(items);
      })
    },[match.params.id])
    return (
        <div>
            {
                post.map((singlepost, index) => (
                    <div key={index}>
                        <h1>
                            {singlepost.title}
                        </h1>
                        <img src={singlepost.imgUrl} alt={singlepost.id}/>
                        <div>
                            {HTMLReactParser(singlepost.content)}
                        </div>
                        <p>
                            {singlepost.category}
                        </p>
                        <ul>
                            {singlepost.tags.map((tag, index) =>(
                                <li key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <p>
                            {singlepost.time}
                        </p>
                        <div>
                            <img src={singlepost.author.authorImg} alt={singlepost.author.authorName}/>
                            <h4>
                               {singlepost.author.authorName}
                            </h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Single
