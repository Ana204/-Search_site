import React, { useEffect, useState }from 'react'

const Teste = () => {
    const [posts, setPosts] = useState()

    useEffect(() => {
        let url = 'https://api.sheety.co/be587a93d2a2be688fa695763f9eb574/meioAmbiente/disponiveis';
        fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        
        //tranformando json em array

        console.log(json.disponiveis)
        setPosts(json.disponiveis)
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map(posts => (
                        <li key={posts.id}>{posts.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Teste
