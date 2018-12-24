import React, { Component } from "react";
var API = "AIzaSyC1lpjuMSqSNq7p0No82E0kjJK0h1XfibU";
var channelID = "UCNSdjX4ry9fICqeObdZPAZQ";
var result = "5";
const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      youtube: []
    };
  }
  clicked() {
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        const youtube = responseJson.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ youtube });
        console.log(this.state.youtube);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.clicked.bind(this)}>
          Get your youtube videos
        </button>
        {this.state.youtube.map((doc, i) => {
          console.log(doc);
          var frame = (
            <div key={i} className="youtube">
              <iframe
                width="560"
                height="315"
                src={doc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
