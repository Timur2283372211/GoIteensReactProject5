import "../Top/Top.css";
import allCharacters from'../../../allCharacters.json';
import specificCharacter from'../../../specificCharacter.json'
import hogwartsStudents from'../../../hogwartsStudents.json'
import hogwartsStaff from '../../../hogwartsStaff.json'
import charactersHouse from '../../../charactersHouse.json'
import allSpells from '../../../allSpells.json'

export default function Top({ onCategorySelect }) {
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
              <button onClick={() => handleButtonClick(allCharacters)}>All Characters</button>
              <button onClick={() => handleButtonClick(specificCharacter)}>Specific Character by ID</button>
              <button onClick={() => handleButtonClick(hogwartsStudents)}>Hogwarts Students</button>
              <button onClick={() => handleButtonClick(hogwartsStaff)}>Hogwarts Staff</button>
              <button onClick={() => handleButtonClick(charactersHouse)}>Characters in a House</button>
              <button onClick={() => handleButtonClick(allSpells)}>All Spells</button>
            </div>
          </div>
        </main>
        <footer>
          <p>&copy; 2024 HP-API. All rights reserved.</p>
        </footer>
      </div>
  );
}
