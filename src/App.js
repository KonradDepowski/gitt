import Button from "./Button";

function App() {
  return (
    <div id="app">
      <div>
        <h1>MASON</h1>
      </div>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>TDIS</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>MAINE KAMPF</h2>
        <p>
          <Button>Home</Button>
        </p>
        <p>
          <Button mode="text">Add</Button>
        </p>
      </section>
      <section>
        <h2>JEBAC DISA</h2>
        <p>
          <Button mode="filled" disabled>
            Disabled
          </Button>
          <Button mode="filled" disabled>
            Disabled
          </Button>
        </p>
        <p>
          <Button onClick={() => console.log("Clicked!")}>Click me</Button>
        </p>
      </section>
    </div>
  );
}

export default App;
