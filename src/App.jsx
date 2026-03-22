import { useState } from "react";
import "./App.css";
import { Route, RouterProvider } from "react-router-dom";
import { routes as pageRoutes } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={pageRoutes} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
