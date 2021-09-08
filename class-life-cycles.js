var rootTag = document.getElementById("root");

class EvenNumberComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("EvenNumber: constructor");

    this.state = {
      defaultValue: 0
    };
  }

  //1
  componentWillMount() {
    console.log("EvenNumber: will mount!");
  }
  // 2
  componentDidMount() {
    console.log("EvenNumber: did mount!");
  }
  // 3
  componentWillUnmount() {
    console.log("EvenNumber: will  unMount!");
  }

  // default
  render() {
    console.log("EvenNumber: render!");
    return (
      <div>
        <h1>I am even number!</h1>
      </div>
    );
  }
}

class OddNumberComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("OddNumber: constructor");

    this.state = {
      defaultValue: 0
    };
  }

  //1
  componentWillMount() {
    console.log("OddNumber: will mount!");
  }
  // 2
  componentDidMount() {
    console.log("OddNumber: did mount!");
  }
  // 3
  componentWillUnmount() {
    console.log("OddNumber: will unMount!");
  }

  // default
  render() {
    console.log("OddNumber: render!");
    return (
      <div>
        <h1>I am Odd number!</h1>
      </div>
    );
  }
}

function ParentComponent() {
  //useState hooks
  const [showEvenNumber, setShowEvenNumber] = React.useState(false);

  return (
    <div>
      {showEvenNumber ? <EvenNumberComponent /> : <OddNumberComponent />}

      <button onClick={() => setShowEvenNumber(!showEvenNumber)}>Toggle Number</button>
    </div>
  );
}

ReactDOM.render(<ParentComponent />, rootTag);
