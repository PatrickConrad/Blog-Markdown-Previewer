import React, { Component } from 'react'
import firebaseDB from '../../firebase';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             title: ''
        };
    }
    
    componentDidMount() {
        firebaseDB.ref('/posts').on('value', (snapshot) => {
            let posts = [];
            snapshot.forEach(childSnapshot => {
                posts.push({...childSnapshot.val(), key: childSnapshot.key})
            });
            this.setState({
                posts
            })
        })
    }


    render() {
        console.log(this.state.posts)
        return (
            <div>
                <h1 className="mt-4 mb-4 text-center">My Blog</h1>
                <div className="container"> 
                    <div className="row">
                        <div className="col text-center">
                            <button className="btn btn-danger">
                                <Link to={`/NewPost/${this.state.posts.length}`}>
                                New Post
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    {this.state.posts.map(post => 
                    (
                        <div className="mt-4 mb-4" key={post.key}>
                            <Link to={`/posts/${post.key}`}>
                                <h2>{post.title}</h2>
                                <hr/>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default Home
