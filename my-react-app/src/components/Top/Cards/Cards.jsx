import '../Cards/Cards.css'

export default function Cards({ cards }) {

  if (!cards) {
    return (
      <div className="cards-container">
        <p className="no-data-message">Please select a category to display data</p>
      </div>
    );
  }


  if (!Array.isArray(cards)) {
    return (
      <div className="cards-container">
        <p className="no-data-message">Selected data is not in array format</p>
      </div>
    );
  }


  if (cards.length === 0) {
    return (
      <div className="cards-container">
        <p className="no-data-message">No data available for this category</p>
      </div>
    );
  }

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="character-card" key={card.id || card.name} data-house={card.house}>
          <h2 className="character-name">{card.name}</h2>
          <div className="card-content">
            <img 
              className="character-image" 
              src={card.image} 
              alt={card.name} 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <table className="character-table">
              <tbody>
                <tr>
                  <td className="label">Species</td>
                  <td className="value">{card.species || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Gender</td>
                  <td className="value">
                    {card.gender === 'male' ? '♂' : 
                     card.gender === 'female' ? '♀' : 
                     card.gender || 'Unknown'}
                  </td>
                </tr>
                <tr>
                  <td className="label">House</td>
                  <td className="value">{card.house || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Wizard</td>
                  <td className="value">{card.wizard ? '✓' : '✗'}</td>
                </tr>
                <tr>
                  <td className="label">Date of Birth</td>
                  <td className="value">{card.dateOfBirth || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Year of Birth</td>
                  <td className="value">{card.yearOfBirth || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Ancestry</td>
                  <td className="value">{card.ancestry || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Eye colour</td>
                  <td className="value">{card.eyeColour || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Hair colour</td>
                  <td className="value">{card.hairColour || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Wand</td>
                  <td className="value">
                    {card.wand && typeof card.wand === 'object' 
                      ? `${card.wand.wood || 'Unknown'} ${card.wand.core || ''} ${card.wand.length || ''}${card.wand.length ? ' inches' : ''}`.trim()
                      : card.wand || 'Unknown'
                    }
                  </td>
                </tr>
                <tr>
                  <td className="label">Patronus</td>
                  <td className="value">{card.patronus || 'None'}</td>
                </tr>
                <tr>
                  <td className="label">Hogwarts Student</td>
                  <td className="value">{card.hogwartsStudent ? '✓' : '✗'}</td>
                </tr>
                <tr>
                  <td className="label">Hogwarts Staff</td>
                  <td className="value">{card.hogwartsStaff ? '✓' : '✗'}</td>
                </tr>
                <tr>
                  <td className="label">Actor</td>
                  <td className="value">{card.actor || 'Unknown'}</td>
                </tr>
                <tr>
                  <td className="label">Alive</td>
                  <td className="value">{card.alive ? '✓' : '✗'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}