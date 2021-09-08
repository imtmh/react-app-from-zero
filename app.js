var rootTag = document.getElementById("root");

function SimpleReactComponent() {
  return (
    <div>
      Hello from <b>Thiru</b>!
    </div>
  );
}

ReactDOM.render(<SimpleReactComponent />, rootTag);

// console.log("Hello from app!");
// document.getElementById("header").innerHTML = "Hello react!";
