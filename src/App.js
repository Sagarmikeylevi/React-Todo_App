import Todo from "./components/Todo";

// This line imports the Todo component from the "./components/Todo" file.

function App() {
  // This is the main function/component called App.
  // It returns the JSX code that will be rendered on the screen.

  return (
    <>
      {/* This is a JSX fragment that wraps the Todo component. */}
      <Todo />
    </>
  );
}

export default App;
// This line exports the App component so that it can be imported and used in other files.
