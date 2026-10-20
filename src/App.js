import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I am a passionate software developer who enjoys building creative and useful digital experiences.',
      imgSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      profession: 'Full Stack Developer',
    },
    shows: false,
    timeSinceMount: 0,
  };

  componentDidMount() {
    this.mountTime = Date.now();
    this.interval = setInterval(() => {
      this.setState({
        timeSinceMount: (Date.now() - this.mountTime) / 1000,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="app">
        <button className="toggle-btn" onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        <div className="timer">
          Time since mount: {timeSinceMount.toFixed(0)} seconds
        </div>

        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} className="profile-image" />
            <h2>{person.fullName}</h2>
            <p>
              <strong>Profession:</strong> {person.profession}
            </p>
            <p>
              <strong>Bio:</strong> {person.bio}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
