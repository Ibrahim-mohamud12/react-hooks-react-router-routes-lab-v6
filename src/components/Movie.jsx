function Movie({ genres }) {
  if (!genres || genres.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;