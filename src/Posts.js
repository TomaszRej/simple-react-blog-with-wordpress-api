import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Redirect} from 'react-router-dom';


class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      redirect: ""
    }
  }

  componentDidMount() {
    fetch('http://www.example.dev.cc/wp-json/wp/v2/posts', {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
 
      },
    })
      .then(response => response.json())
      .then(data => {
 
        this.setState({ data },
          () => console.log(this.state.data, 'z metody'))
      });
  }

  handleClick = (id) => {
    // fetch(`http://www.example.dev.cc/wp-json/wp/v2/posts/${id}`, {
    //     method: "GET", 
    //     headers: {
    //       "Content-Type": "application/json",
   
    //     },
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('featching');
    //       console.log(data);
    //       this.setState({ redirect:`/:${id}`})
    //     });

    this.setState({
        redirect: `post/:${id}`
    })


     
  }

  renderPosts = () => {
    return (
      this.state.data.map((post) => {
        return (
          <div className="container p-5">
            <div className="card">
              {/* <h5 className="card-header">Featured</h5> */}
              <div className="card-body">
              <Link to={`/post/${post.id}`}>
                        <div >Link</div>
                    </Link>
                <h5 className="card-title">{post.title.rendered}</h5>
                {/* <p className="card-text">{post.excerpt.rendered}</p> */}
                {post.excerpt.rendered}
                <a  onClick={(id) => this.handleClick(post.id)} className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        )
      })
    )

  }

  render() {

    return (
        this.renderPosts()
    )
  }

}

export default Posts;
