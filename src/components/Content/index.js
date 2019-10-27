import React, { Component } from "react";
import CardList from "../CardList/index";
import Header from "../Header";
import Footer from "../Footer";
import characters from "../../characters.json";
import shuffle from "../../utils/utility";

class Content extends Component {
  state = {
    message: "Click an image to begin!",
    messageStyle: {
      color: "deepskyblue",
      fontSize: "35px",
      marginTop: "auto",
      marginBottom: "auto"
    },
    styleChange: false,
    newCharacters: [],
    score: 0,
    totalScore: 0,
    imageStyle: {
      animation: "none"
    },
    clicked: []
  };

  componentDidMount() {
    let temp = shuffle(characters).splice(-12);
    this.setState({
      newCharacters: temp
    });
    console.log("newCharacters", this.state.newCharacters);
  }

  handleClick(event) {
    event.preventDefault();

    console.log("event", event.target);
    let tempClicked = this.state.clicked;
    let tempScore = this.state.score + 1;
    let newImageStyle = {
      animation: "none"
    };

    this.setState({
      imageStyle: newImageStyle
    });

    // First-time click?
    if (this.state.clicked.indexOf(event.target.alt) === -1) {
      // add to the array
      this.setState({ clicked: tempClicked.concat(event.target.alt) });
      this.setState({ score: tempScore });
      this.setState({ message: "Click an image to begin" });

      tempClicked = this.state.clicked;
      if (tempClicked.length === 11) {
        let temp = shuffle(characters).slice(-12);
        let tempTotalScore = this.state.totalScore + 1;
        // udpate states
        this.setState({
          newCharacters: temp
        });
        this.setState({ message: "Click an image to begin" });
        this.setState({
          messageStyle: {
            color: "deepskyblue",
            fontSize: "35px",
            marginTop: "auto",
            marginBottom: "auto"
          },
          styleChange: false
        });
        this.setState({ clicked: [] });
        this.setState({ score: 0 });
        this.setState({ totalScore: tempTotalScore });
      } else {
        let temp = shuffle(this.state.newCharacters);
        this.setState({
          newCharacters: temp
        });
      }
    } else {
      console.log("clicked already");
      this.setState({ message: "Image already clicked!" });
      newImageStyle = {
        animation: "shake 0.5s",
        animationIterationCount: "1"
      };

      this.setState({
        imageStyle: newImageStyle
      });

      this.setState({
        messageStyle: {
          color: "red",
          fontSize: "35px",
          marginTop: "auto",
          marginBottom: "auto"
        },
        styleChange: true
      });

      setTimeout(() => {
        this.setState({ message: "Click an image to begin" });
        this.setState({
          messageStyle: {
            color: "deepskyblue",
            fontSize: "35px",
            marginTop: "auto",
            marginBottom: "auto"
          },
          styleChange: false
        });
        this.setState({ clicked: [] });
        this.setState({ score: 0 });
      }, 1000);

      let temp = shuffle(characters).slice(-12);
      this.setState({
        newCharacters: temp
      });
    }
  }

  render() {
    return (
      <>
        <Header
          title={"Clicky Game"}
          message={this.state.message}
          newMessageStyle={this.state.messageStyle}
          styleChange={this.state.styleChange}
          score={this.state.score}
          totalScore={this.state.totalScore}
        />

        <main role="main" className="container">
          <div className="row mb-5"></div>
          <div className="row mb-5"></div>
          <div className="row mb-5"></div>
          <div className="row mt-5">
            <div className="col">
              <CardList
                chars={this.state.newCharacters}
                handleClick={this.handleClick.bind(this)}
                imageStyle={this.state.imageStyle}
                messageStyle={this.state.messageStyle}
              />
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Content;
