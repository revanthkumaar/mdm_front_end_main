import React from "react";
class TestApi extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://54.179.77.51:5000/mdm/hierarchy/33001")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
 
    return (
      <div className="App">
       Test api
      </div>
    );
  }
}

export default TestApi;
