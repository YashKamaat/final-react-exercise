// FINAL REACT EXERCISE

// 1a
import './MCUShows.css';

// 1B, 5C, 6F 7D
function MCUShows({dates, indexTwo, numTwo}){
  // 1C
  return(
    // 4A
    <div className="MCUShows">
      {/* 3A */}
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      {/* 5c */}
      <p>WandaVision:{dates.wandaVision} </p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter} </p>
      <p>Loki: {dates.loki} </p>
      <p>What If...?:{dates.whatIf}</p>
      <p>Hawkeye: {dates.hawkeye} </p>
      {/* 6E, 6F Another Bonus */}
      <button onClick={indexTwo}>
      RANDOM MCU CHARACTER</button>
      {/* 7C, 7D Another Bonus */}
      <button onClick={numTwo}>NEXT MCU CHARACTER</button>
    </div>
  );
}

// 1d
export default MCUShows;

