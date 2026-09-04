import {RouterProvider} from "react-router-dom";
import {Router} from "@/app/providers/routes/index.js";
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

  return <RouterProvider router={Router} />

}

export default App
