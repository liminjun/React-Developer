import React from 'react';
import logo from './logo.svg';
import './App.css';
import './main.less';
import axios from 'axios';


const testData = [{
  name: "lee", avatar_url: "https://avatars2.githubusercontent.com/u/966009?s=460&v=4", company: "cm soft"
},
{ name: "mingxing", avatar_url: "https://avatars2.githubusercontent.com/u/966009?s=460&v=4", company: "知图" }
];

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}

  </div>
)
class Form extends React.Component {
  state = {
    userName: ''
  };
  handleSubmit = async (event) => {

    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({userName:''});

  }
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required></input>
        <button>Add Card</button>
      </form>
    )
  }
}
class Card extends React.Component {
  render() {
    const profile = this.props;

    return (
      <div className="github-profile">
        <img src={profile.avatar_url}></img>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []

    }

  }
  addNewProfile = (profileData) => {
    this.setState(prevState=>({
      profiles:[...prevState.profiles,profileData]
    }));
    console.log('App', profileData);
  }
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}></CardList>
      </div>
    );
  }
}

export default App;
