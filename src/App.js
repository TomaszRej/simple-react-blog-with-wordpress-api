import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Posts from './Posts';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
  render() {

    return (

        <HashRouter>
        <div>
            {/* <Nav globalUserName={this.state.globalUserName} resetFavoriteList={this.resetFavoriteList}
                 setUserName={(name) => this.setUserName(name)}/> */}
            <Switch>
                <Route exact path='/'
                       render={(props) => <Posts {...props} />}
                />
                                <Route exact path='/post/:id'
                       render={(props) => <Post {...props} data={this.state.data} x='xxx'/>}
                />


                {/* <Route exact path='/ulubione'
                       render={(props) => <Favorites {...props} favorites={this.state.favorites}
                                                     globalUserName={this.state.globalUserName}/>}
                />
                <Route exact path='/recipe/:id'
                       render={(props) => <Recipe {...props} addToFavoritesList={this.addToFavoritesList}
                                                  removeFromFavoritesList={this.removeFromFavoritesList}
                                                  favorites={this.state.favorites}/>}
                />
                <Route exact path='/dodawanieProduktu'
                       render={(props) => <AddProduct {...props} updateData={(obj) => {
                           this.updateData(obj)
                       }} updateRecipes={this.props.updateRecipes}
                                                      globalUserName={this.state.globalUserName}/>}
                />
                <Route
                    path='/logowanie'
                    render={(props) => <Login {...props} updateFavoriteList={this.updateFavoriteList}
                                              userName={this.state.globalUserName}
                                              setUserName={(name) => this.setUserName(name)}/>}
                /> */}
            </Switch>
        </div>
    </HashRouter>
    )
  }

}

export default App;
