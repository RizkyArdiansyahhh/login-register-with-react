import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./Pages/signinPage";
import SignUpPage from "./Pages/signUpPage";
import PageNotFound from "./Pages/pageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-sky-500 h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">Welcome My Website</h1>
      </div>
    ),
    errorElement: <PageNotFound></PageNotFound>,
  },
  {
    path: "/signin",
    element: <SignInPage></SignInPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
