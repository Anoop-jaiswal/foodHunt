import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops error</h1>
      <h3>{err.error.message}</h3>
      <h3>
        status :{err.status} {err.statusText}
      </h3>
    </>
  );
};
export default Error;
