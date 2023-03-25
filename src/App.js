import "./App.css";
import ContextProvider from "./ContextApi/ContextProvider";
import AllRouters from "./Routers/AllRouters";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <AllRouters />
      </ContextProvider>
    </div>
  );
}

export default App;
// {*<Route>
//   <ContextProvider>
//     <Chat />

//     <Switch>// All routes here</Switch>
//   </ContextProvider>
// </Route>;*}
