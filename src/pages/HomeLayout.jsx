import { Link } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
