import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null

        }
    }

    componentDidMount() {
        console.log('component did mount');
        const { id } =  this.props.match.params;
        const parsedInt = parseInt(id);
        console.log(parsedInt);
        let newPost = {};
        for(const el of this.props.data){
            console.log(el.id, id);
            if(el.id == id){
                newPost = el;
            }
        }
        this.setState({
            post: newPost
        })
        
    }



    render() {
console.log(this.props.data,'post from props!!!!!');
if(!this.state.post){
return null;
}

// const { id } =  this.props.match.params;
// const parsedInt = parseInt(id);
// console.log(parsedInt);
// let newPost = {};
// for(const el of this.props.data){
//     console.log(el.id, id);
//     if(el.id == id){
//         newPost = el;
//     }
// }
// const post = this.props.post;

const post = this.state.post ;


        return (
            <>
             <div>{post.id}</div>
             <div>{ post.title.rendered }</div>
             <div>{post.content.rendered}</div> 
             </>
      

        )
    }

}

export default Post;
