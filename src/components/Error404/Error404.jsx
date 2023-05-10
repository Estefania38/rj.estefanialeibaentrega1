import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container my-5">
      <h1>El Item solicitado no se encuentra disponible...</h1>
      <hr />
      <Link to={"/"} className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
