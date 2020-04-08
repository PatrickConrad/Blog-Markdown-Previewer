import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import firebaseDB from '../../firebase'
import PreviewText from './PreviewText'

import ReactMarkdown from 'react-markdown'

class Post extends Component {
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


    onChange=()=> {
        this.postFBRef.set({
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value
        })
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
    }
    

    render() {

        // let previewText = `\#This is awesome
        // \#\#Or is it
        // `
      
        return (

            <>
                <div className='row'>
                    <div className="col col-sm-12">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="col col-sm-12">
                        <input className='post-title-input'
                        ref={this.titleRef}
                        type="text"
                        placeholder= "Title"
                        onChange={this.onChange}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col col-sm-6">
                    
                        <textarea className='form-control' id="editor"
                        ref={this.bodyRef}
                        type={"text"}
                        onChange={this.onChange}
                        row={30}
                        >
                            {PreviewText}
                        </textarea>
                    </div>
                    <div className="col col-sm-6" id='preview'>
                        
                        <ReactMarkdown  source={this.state.mdBody?this.state.mdBody:PreviewText}/>
                    </div>
                </div>
                
            </>
        )
    }
}

export default Post





// import React, { Component } from 'react'
// import Previewer from './Previewer'

// class Editor extends Component {

//     constructor(props) {
//         super(props)
      
//         this.state = {
//            markdownText: 'Begin Markdown here!',
    
        
//           }
    
//           this.handleChange = (e) => {
//             this.setState({
//                 markdownText: e.target.value
//             })
//             console.log(this.state.markdownText)
//         }
    
//       }

//     render() {

//         const {markdownText} = this.state;
//         return (

        //   <div className='container'>
        //        <div id="editorBox">
        //             <div className='titleBox'>
        //                 <h5>Editor</h5>
        //             </div>
        //             <textarea id='editor' value={markdownText} onChange={this.handleChange}>
                        
        //             </textarea>
        //        </div>
        //        <Previewer markedText={this.state.markdownText}/>
        //   </div>
//         )
//     }
// }

// export default Editor
