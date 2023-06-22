import { useTheme } from "styled-components";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  const theme = useTheme();
  console.log(theme);
  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className='App-link'
  //         href='https://reactjs.org'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Learn React
  //       </a>
  //       <Test />
  //     </header>
  //   </div>
  // );
  return <RouterProvider router={router} />;
}

export default App;
