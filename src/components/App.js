import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit(term) {
    console.log(term);
    console.log(this);

    // Method 1
    // unsplash
    //   .get("/search/photos", {
    //     params: { query: term },
    //   })
    //   .then((response) => this.setState({ images: response.data.results }));

    // Method 2
    fetch(
      `https://api.unsplash.com/search/photos?client_id=SNntBU5XK2Zg46tbbbTds_BgjMYoQZONbaqKCxsZNOU&query=${term}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ images: data.results }));
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* <SearchBar onSubmit={this.onSearchSubmit.bind(this)} /> */}
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
