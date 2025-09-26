export default function RecipeCard({
  RecipeName,
  Time,
  serving,
  difficulty,
  type,
  chefname,
  img,
}) {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{RecipeName}</h2>
        <p>{Time}</p>
      </header>
      <section className="recipe-details">
        <div>
          <p>{serving}</p>
          <p>{difficulty}</p>
          <p>{type}</p>
        </div>
        <img className="fooding" src={img} alt="Food images " />
      </section>
      <footer className="recipe-footer">
        <small>{chefname}</small>
      </footer>
    </div>
  );
}
