import React, { Component } from "react";
import profilPhoto from "./img/profilPhoto.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      person: {
        fullName: "Sana Moumni",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia turpis in  condimentum sem, per inceptos himenaeos.",
        imgSrc: { profilPhoto },
        profession: "Developer Fullstack js",
        show: false,
      },
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.counter === "double") {
        this.setState({ count: this.state.count + this.state.count });
      } else {
        this.setState({ count: this.state.count + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleClick = () => {
    this.setState({
      count: 0,
      person: { ...this.state.person, show: !this.state.person.show },
    });
  };
  toggledButon = () => {
    return (
      <div className="btnToggled">
        {this.state.person.show ? (
          <div >
            <p> Timer : {this.state.count} </p>
            <div className="card" style={{ width: "18rem" }}>
            <img src={profilPhoto } className="image1" alt="img1" />
             
              <div className="card-body">
         
        
                <h3 className="card-title">{this.state.person.fullName}</h3>
                <h5 className="card-title">{this.state.person.profession}</h5>
                <p className="card-text">{this.state.person.bio}</p>
        
              </div>
            </div>
           
          </div>
        ) : (
          <p></p>
         
         
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <button className="btn1"
          onClick={(e) => {
            this.handleClick();
          }}
          
          
        >
          {this.state.person.show ? "Hide my profile" : "Show my profile"}
      
          
        </button>
        
        {this.toggledButon()}
      </div>
    );
  }
}

App.propTypes = {};

export default App;