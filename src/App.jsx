import { useEffect, useState } from "react";



function App() {

  const [position, setPosition] = useState(0);
  const [roll, setRoll] = useState();

  const mapSize = 16;


  function rollDice(diceSize){
    const newRoll = Math.floor(Math.random() * diceSize + 1);   
    setRoll(newRoll);
    movePlayer(newRoll);
  }

  function movePlayer(distance){
    let newPosition = position + distance;
    if (newPosition > mapSize - 1){
      newPosition -= mapSize;
    }
    setPosition(newPosition);
  }

  function GridMap() {
    const rows = 3;
    const cols = 3;
    const [selected, setSelected] = useState(null);
  
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '8px',
        }}
      >
        {Array.from({ length: rows }).map((_, rowIdx) =>
          Array.from({ length: cols }).map((_, colIdx) => (
            <div
              key={`${rowIdx}-${colIdx}`}
              onClick={() => setSelected(`${rowIdx}-${colIdx}`)}
              style={{
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #333',
                borderRadius: '4px',
                background: selected === `${rowIdx}-${colIdx}` ? '#4a90d9' : '#fff',
                color: selected === `${rowIdx}-${colIdx}` ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              {rowIdx}, {colIdx}
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Basic Monopoly</h1>
      <p>The position is {position}</p>
      <button
      onClick={()=>{rollDice(6)}}
      >Roll the dice</button>
      <p>You rolled {roll}</p>
      <p>{GridMap()}</p>
    </div>
  );
}

export default App;