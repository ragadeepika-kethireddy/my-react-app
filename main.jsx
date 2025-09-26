import { createRoot } from "react-dom/client";
import RecipeCard from "./Recipe";
const root = createRoot(document.getElementById("root"));

//root.render(<RecipeCard />);
function Cards() {
  return (
    <>
      <header className="mainhead">RECIPE MENU CARD</header>
      <div className="mainParent">
        <RecipeCard
          RecipeName="BIRYANI"
          Time="Prep Time :180 min | Cook Time : 160min"
          serving="Serves :20 people"
          difficulty="Difficulty :Tough"
          type="Type :Launch"
          chefname="Deepika"
          img="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
        />

        <RecipeCard
          RecipeName="PANEER CURRY"
          Time="Prep Time :120 min | Cook Time : 100min"
          serving="Serves :10 people"
          difficulty="Difficulty :Moderate"
          type="Type :Beverage"
          chefname="Lithvika"
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTmZ-wDe0AbxSkVOQGCHS6zybOpZstucDkw&s"
        />

        <RecipeCard
          RecipeName="PANI PURI "
          Time="Prep Time :5 min | Cook Time : 10min"
          serving="Serves :3 people"
          difficulty="Difficulty :Easy"
          type="Type :Snack"
          chefname="Harini"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/1200px-Pani_Puri1.JPG"
        />

        <RecipeCard
          RecipeName="DAHI PURI"
          Time="Prep Time :5 min | Cook Time : 10min"
          serving="Serves :3 people"
          difficulty="Difficulty :Easy"
          type="Type :Snack"
          chefname="Mouni"
          img="https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-3.jpg"
        />

        <RecipeCard
          RecipeName="GOBI"
          Time="Prep Time :5 min | Cook Time : 10min"
          serving="Serves :5 people"
          difficulty="Difficulty :Moderate"
          type="Type :snack"
          chefname="Aishu"
          img="https://www.sharmispassions.com/wp-content/uploads/2022/02/gobi-manchurian2.jpg"
        />
      </div>
    </>
  );
}
root.render(<Cards />);
