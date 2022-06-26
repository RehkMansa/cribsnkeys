import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h3>Page Not found</h3>
      <Link to={'/'}>Go To Home</Link>
    </div>
  );
};

export default Error404;
