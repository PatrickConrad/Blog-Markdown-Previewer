import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

class Previewer extends Component {
    render() {
        return (
            <>
            <h2>{this.props.postTitle}</h2>
           <div id='preview'>
                < ReactMarkdown source={this.props.previewer}/>
           </div>
                
            </>
        )
    }
}

export default Previewer
