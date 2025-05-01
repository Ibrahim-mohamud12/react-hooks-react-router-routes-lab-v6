import { Link } from "react-router-dom";

function MovieCard({ id, title }) {
  return (
    <li>
      {title} {/* Render the title as plain text */}
      <Link to={`/movie/${id}`}>View Info</Link>
    </li>
  );
}

export default MovieCard;