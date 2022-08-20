import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        profession: 'Web Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nunc nisl eget nunc.',
        imgSrc: 'https://www.w3schools.com/howto/img_avatar.png',
      },
      toggle: false,
      timer: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timer: this.state.timer + 1
    });
  }





  render() {
    return (
      <>
        {
          this.state.toggle ? (
            <>
              <div className="App">
                <h1>{this.state.person.fullName}</h1>
                <h2>{this.state.person.profession}</h2>
                <p>{this.state.person.bio}</p>
                <img src={this.state.person.imgSrc} alt="avatar" />
              </div>
              <button style={{
                width: '100px',
                height: '50px',
                backgroundColor: 'red',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                marginLeft: '45%'
              }} onClick={() => this.setState({ toggle: false })}>Hide</button>
              
              {/* show timer */}
              <h1 style={{textAlign: 'center'}}>{this.state.timer} secondes</h1>
            </>
          ) : (
              <button style={{
                width: '70px',
                height: '50px',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'blue',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '45%'
            }} onClick={() => this.setState({ toggle: true })}>toggle</button>
          )
        }
      </>
    );
  }
}

export default App;
