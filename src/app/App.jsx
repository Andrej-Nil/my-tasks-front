import {RouterProvider} from "react-router-dom";
import {router} from "@/app/routes/index.jsx";
// import {Router} from "@/app/providers/routes/index.jsx";
import {useUserStore} from "@/entities/user/index.js";
import {useEffect} from "react";
import './styles/index.scss'

function App() {
  const checkAuth = useUserStore((state) => state.checkAuth);
  const isAuthChecked = useUserStore((state) => state.isAuthChecked);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthChecked) {
    return (
        <div className="app-loading">
          <div className="spinner">Загрузка приложения...</div>
        </div>
    );
  }

  return <RouterProvider router={router} />

}

export default App
