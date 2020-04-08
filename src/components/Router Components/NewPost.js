import React, { Component } from 'react'
import TextInput from './TextInput'
import uuid from 'uuid/v4'
import PreviewText from './PreviewText'
import Previewer from './Previewer'
import firebaseDB from '../../firebase';
import { Link } from 'react-router-dom';



class NewPost extends Component {
constructor(props) {
    super(props)

    this.titleRef = React.createRef();
    this.bodyRef = React.createRef();

    this.postFBRef = firebaseDB.ref(`posts/${this.props.match.params.postId}`)


    this.state = {
        title: ``,
        mdBody: '',
        newId: undefined
    }
}



componentDidMount(){
    const { NumOfPosts } = this.props.match.params
    

    if(!NumOfPosts) return;
    this.setState({
        title: `New Post ${NumOfPosts}`,
        mdBody: PreviewText,
        newId: uuid()
    })
    

}




onChange = (e) => {
    if(this.state.title === '') return;
    this.setState({
        [e.target.name]: e.target.value
    });
    console.log(this.state.target);
    console.log(this.state.mdBody);
    firebaseDB.ref(`posts/${this.state.newId}`).set({
        title: this.state.title,
        body: this.state.mdBody
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))
}



onSubmit = (e) => {
    e.preventDefault();
   if(this.state.title === '') return;

    firebaseDB.ref(`posts/${this.state.newId}`).set({
        title: this.state.title,
        body: this.state.mdBody
    })
    .then(res => {
        this.props.history.push(`/posts/${this.state.newId}`)
    })
    .catch(err => console.log(err))

}


    render() {
        return (
            <div>
                <div className='navBar'>
                    <Link  id="homeLink" to='/'>Home</Link>
                </div>
                <form className='mt-15' onSubmit={this.onSubmit}>
                {/* <form onSubmit={this.onSubmit}> */}
                    <div className='container'>
                        <div className="input-group mb-3">
                            <input 
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>
                    </div> 

                    <div className='container'>
                        <TextInput onChange={this.onChange}/>
                    </div> 
                    <div className="input-group-append" id="createPost">
                        <button className="btn btn-success"  id="postButton" type="submit">Create</button>
                    </div>
                    <div className='container'>
                        <Previewer previewer={this.state.mdBody}/>
                    </div> 

                    


                </form>
            </div>
        )
    }
}


export default NewPost








