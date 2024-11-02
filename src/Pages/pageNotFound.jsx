import { useRouteError } from "react-router-dom";
const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-y-6">
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p className="font-medium text-slate-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default PageNotFound;
