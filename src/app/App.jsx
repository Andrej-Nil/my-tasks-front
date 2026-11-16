import QueryProvider from "./providers/QueryProvider";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import './styles/index.scss'


function App() {
  return (
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    )
}
export default App
