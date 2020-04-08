import React, { Component } from 'react'
import PreviewText from './PreviewText'

import ReactMarkdown from 'react-markdown'

class TextInput extends Component {
    
    // componentDidMount(){
    //     this.postFBRef.on('value', snapshot => {
    //         if(!snapshot.val()) return
    //         this.titleRef.current && (this.titleRef.current.value = snapshot.val().title);            
    //         this.bodyRef.current && (this.bodyRef.current.value = snapshot.val().body)
    //         this.setState({
    //             mdBody: snapshot.val().body
    //         })
    //     }
        
    //     )}


    // onChange=()=> {
    //     // this.postFBRef.set({
    //     //     title: this.titleRef.current.value,
    //     //     body: this.bodyRef.current.value
    //     // })
    //     // .then((res)=> console.log(res))
    //     // .catch((err)=> console.log(err))
    // }
    

    
    

    render() {
      
        return (

            <textarea className='form-control' id="editor"
            ref={this.bodyRef}
            type={"text"}
            onChange={this.props.onChange}
            row={30}
            name='mdBody'
            defaultValue= {PreviewText}
            >
                   
            </textarea>
        )
    }
}

export default TextInput





//  {/* <div className='row'>
//                     <div className="col col-sm-12">
//                         <Link to='/'>Home</Link>
//                     </div>
//                     <div className="col col-sm-12">
//                         <input className='post-title-input'
//                         ref={this.titleRef}
//                         type="text"
//                         placeholder= "Title"
//                         onChange={this.onChange}/>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className="col col-sm-6">
                    
//         <textarea className='form-control' id="editor"*/}


//                         {/* ref={this.bodyRef}
//                         type={"text"}
//                         onChange={this.onChange}
//                         row={30}
//                         >
//                             {PreviewText} */}
//             {/*
//                         </textarea>
//                     </div>
//                     <div className="col col-sm-6" id='preview'>
                        
//                         <ReactMarkdown  source={this.state.mdBody?this.state.mdBody:PreviewText}/>
//                     </div>
//                 </div> */}