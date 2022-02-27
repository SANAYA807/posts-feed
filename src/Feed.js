import React, { useEffect, useState } from 'react'
import { API_KEY } from './config'
import axios from 'axios'
import Post from './Post'
const Feed = () => {
    const [posts, setPosts] = useState([])
    const [message, setMessage] = useState('')
    const [gif, setgif] = useState('')
    const [toggle, setToggle] = useState(false)
    const [gifSearch, setGifSearch] = useState('')
    const [gifs, setGifs] = useState([])
    useEffect(async () => {
        if (gifSearch !== '') {
            let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=15&offset=0&q=${gifSearch}`)
            if (res.data) {
                setGifs(res.data.data.map(item => item.images.original.url))
                console.log(res.data);
            }

        } else {

            let res = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0`)
            if (res.data) {
                setGifs(res.data.data.map(item => item.images.original.url))
            }

        }
    }, [gifSearch])

    const handleClick = (item) => {
        setgif(item)
        setToggle(!toggle)
    }
    const handleSubmit = () => {
        setPosts([{ message, gif }, ...posts])
        console.log(posts);
        setgif('')
        setMessage('')
    }

    return (
        <>
            <div className="container">
                <div class="card">
                    <div class="card-header">
                        POSTS
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Enter your story below</h5>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="write something...." value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button class="btn btn-outline-secondary" type="button" onClick={() => setToggle(!toggle)}>Add Gif</button>
                            <button class="btn btn-outline-secondary" type="button" onClick={() => handleSubmit()}>Post</button>
                        </div>
                        {gif !== '' && <img src={gif} height='200px' />}
                    </div>
                </div>

                {/* gif search ---------------------------------------------------------- */}

                {toggle && <div className='card' style={{ position: 'absolute', top: '120px', right: '10%', zIndex: '100', width: '80%', margin: 'auto', marginTop: '20px', height: '20rem', overflow: 'scroll' }}>
                    <div className="container">
                        <div class="input-group" style={{ marginTop: '10px' }}>
                            <input type="text" class="form-control" placeholder="write something...." onChange={e => setGifSearch(e.target.value)} />

                        </div>
                    </div>
                    <div className="card-body">
                        <div class="row text-center text-lg-start">
                            {gifs?.map(item => <div class="col-lg-3 col-md-4 col-6">
                                <img class="img-fluid img-thumbnail" src={item} alt="" onClick={() => handleClick(item)} />
                            </div>)}

                        </div>
                    </div>
                </div>}
                {/* posts ----------------------------------------------------------------------- */}
                <hr />
                {posts.map((post, index) => <Post key={index} message={post.message} gif={post.gif} />)}

            </div>
        </>

    )
}

export default Feed