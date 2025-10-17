import "../Top/Top.css";

/*change fetchData on hanleButtonClick() in 49 - 54 if you want to get data from json files in this project*/
// import allCharacters from'../../../allCharacters.json';
// import specificCharacter from'../../../specificCharacter.json'
// import hogwartsStudents from'../../../hogwartsStudents.json'
// import hogwartsStaff from '../../../hogwartsStaff.json'
// import charactersHouse from '../../../charactersHouse.json'
// import allSpells from '../../../allSpells.json'
const allCharacters = "https://hp-api.onrender.com/api/characters";
const specificCharacter = "https://hp-api.onrender.com/api/character/:id";
const hogwartsStudents = "https://hp-api.onrender.com/api/characters/students";
const hogwartsStaff = "https://hp-api.onrender.com/api/characters/staff";
const charactersHouse = "https://hp-api.onrender.com/api/characters/house/gryffindor";
const allSpells = "https://hp-api.onrender.com/api/spells";

export default function Top({ onCategorySelect }) {
  async function fetchData(category) {
    try{
      const response = await fetch(category);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      onCategorySelect(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleButtonClick = (category) => {
    console.log(category);
    onCategorySelect(category);
  }

  return (
      <div className="container">
        <header>
          <h1>
            Welcome to the <span>HP-API!</span>
          </h1>
        </header>
        <main>
          <div className="main-section">
            <p>
              Use these routes to request data on Harry Potter characters or
              spells:
            </p>
            <div className="buttons">
              <button onClick={() => fetchData(allCharacters)}>All Characters</button>
              <button onClick={() => fetchData(specificCharacter)}>Specific Character by ID</button>
              <button onClick={() => fetchData(hogwartsStudents)}>Hogwarts Students</button>
              <button onClick={() => fetchData(hogwartsStaff)}>Hogwarts Staff</button>
              <button onClick={() => fetchData(charactersHouse)}>Characters in a House</button>
              <button onClick={() => fetchData(allSpells)}>All Spells</button>
            </div>
          </div>
        </main>
        <footer>
          <p>&copy; 2024 HP-API. All rights reserved.</p>
        </footer>
      </div>
  );
}
