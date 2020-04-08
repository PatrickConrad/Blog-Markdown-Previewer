import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import firebaseDB from '../../firebase'
import ReactMarkdown from 'react-markdown'
import Editor from '../Markdown Components/Post'

class Markdown extends Component {
    
    
    render() {
        return (
            <div>
                <h1>Markdown Converter</h1>
               
                    <Editor/>
                
            </div>
        )
    }
}

export default Markdown
