import Button from "./Button";

function App() {
  return (
    <div id="app">
      <section>
        <h2>Filled BELOS</h2>
        <p>
          <Button>Default</Button>
        </p>
        <p>
          <Button styles="filled-button" mode="filled">
            Filled (Default)
          </Button>
        </p>
      </section>
      <section>
        <h2>Button with Outline</h2>
        <p>
          <Button mode="outline">Outline</Button>
        </p>
      </section>
      <section>
        <h2>Text-only Button</h2>
        <p>
          <Button mode="text">Text</Button>
        </p>
      </section>
      <section>
        <h2>Button with Icon</h2>
        <p>
          <Button>Home</Button>
        </p>
        <p>
          <Button mode="text">Add</Button>
        </p>
      </section>
      <section>
        <h2>Buttons Should Support Any Props</h2>
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
