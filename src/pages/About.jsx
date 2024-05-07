import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        adipisci beatae nobis sapiente, asperiores tempore dolore in fuga
        dolorum doloribus fugiat id amet nulla fugit! Quos vero iure repellat
        saepe?
      </p>

      <Link to="/">Home</Link>
    </div>
  );
}
