import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import firebaseDB from '../../firebase'
import PreviewText from './PreviewText'

import ReactMarkdown from 'react-markdown'

class FinalPost extends Component {
    constructor(props) {
        super(props)
    
        this.titleRef = React.createRef();
        this.bodyRef = React.createRef();

        this.postFBRef = firebaseDB.ref(`posts/${this.props.match.params.postId}`)
        this.state = {
            mdBody: undefined
        }
    }

    componentDidMount(){
        this.postFBRef.on('value', snapshot => {
            if(!snapshot.val()) return
            this.titleRef.current && (this.titleRef.current.value = snapshot.val().title);            
            this.bodyRef.current && (this.bodyRef.current.value = snapshot.val().body)
            this.setState({
                mdBody: snapshot.val().body
            })
        }
        
        )}

    

    render() {

        return (

            <>
                    <div className='navBar'>
                        <Link  id="homeLink" to='/'>Home</Link>
                    </div>
                    
                    <div id='finalPost'>
                        
                        <ReactMarkdown  id='parsedText' source={this.state.mdBody?this.state.mdBody:PreviewText}/>
                    </div>
                
                
            </>
        )
    }
}

export default FinalPost





