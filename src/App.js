import React, { useState } from 'react';
function App() {

  const [homer, setHomer] = useState({
    imgUrl: 'https://www.onthisday.com/images/people/homer-simpson-medium.jpg',
    clickedOn: false,
    name: 'Homer Simpson',
  });
  const [marge, setMarge] = useState({
    imgUrl: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest?cb=20201222215318',
    clickedOn: false,
    name: 'Marge Simpson',
  });
  const [bart, setBart] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
    clickedOn: false,
    name: 'Bart Simpson',
  })
  const [lisa, setLisa] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
    clickedOn: false,
    name: 'Lisa Simpson',
  })
  const [maggie, setMaggie] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
    clickedOn: false,
    name: 'Maggie Simpson',
  })
  const [abe, setAbe] = useState({
    imgUrl: 'https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png/revision/latest?cb=20201222214913',
    clickedOn: false,
    name: 'Abe Simpson',
  })
  const [milhouse, setMilhouse] = useState({
    imgUrl: 'https://static.wikia.nocookie.net/springfieldbound/images/2/23/Milhouse_Van_Houten_%28Official_Image%29.png/revision/latest?cb=20200517161925',
    clickedOn: false,
    name: 'Milhouse Van Houten',
  })
  const [ned, setNed] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png',
    clickedOn: false,
    name: 'Ned Flanders',
  })
  const [nelson, setNelson] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG',
    clickedOn: false,
    name: 'Nelson Muntz',
  })
  const [apu, setApu] = useState({
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Apu_Nahasapeemapetilon_%28The_Simpsons%29.png',
    clickedOn: false,
    name: 'Apu Nahasapeemapetilon',
  })

  const [arr, setArr] = useState([]);
  setArr([homer, marge, bart, lisa, maggie, abe, milhouse, ned, nelson, apu]);
  console.log(arr);

  return (
    <div id="container">
      <h1 id="mainTitle"> Memory Card Game</h1>
      <div id="homerCard">
        <img 
        src={homer.imgUrl}
        alt="Homer"
        />
      </div>
    </div>
  );
}

export default App;
