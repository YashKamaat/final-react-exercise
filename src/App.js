//2A

import MCUShows from "./mcu-shows/MCUShows";

//BONUs 6A
import {useState} from 'react';

import {useEffect} from 'react';
// 5a
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

//6B Another Bonus
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];


function App() {
  //6C Another Bonus
  const [index, setIndex] =useState (0);

  // 7A
  const [num, setNum] = useState(0);

  //Final BONUS 8
  // The function (1st argument) passed into the useEffect function/hook will run every time the state value that is passed into the array (2nd argument)
  useEffect(() => {
    alert("The Next MCu Character has been displayed");
  }, [num]);

  //6F Another Bonus
  function newIndex(){
    const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
    setIndex(randomIndex);
  }

  //7D another Bonus
  function newNum() {
    if (num < mcuCharacters.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }
  return (
    <div> 
    {/*2B*/}
    <h1>FINAL REACT EXERCISE</h1>
    {/*2C, 5B, 6F 7D*/}
    <MCUShows dates={releaseDates}
    indexTwo={newIndex}
    numTwo={newNum} />
    {/* BONUS 6d , 6F*/}
    <h1>Random MCU Character:{mcuCharacters[index]} </h1>
    {/* BONUS 7B */}
    <h1>Next MCU Character: {mcuCharacters [num]} </h1>
    </div>
  );
}

export default App;
