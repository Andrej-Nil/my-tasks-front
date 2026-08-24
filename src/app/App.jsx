import {RouterProvider} from "react-router-dom";
import {Router} from "./providers/routes/Router";
import './styles/index.scss'

function App() {

  return <RouterProvider router={Router} />

}

export default App
