import React, { useEffect, useState } from 'react';

import GeneralOverview from './components/GeneralOverview';

function App() {

  const [homer, setHomer] = useState({
    imgUrl: 'https://www.onthisday.com/images/people/homer-simpson-medium.jpg',
    clickedOn: false,
    name: 'Homer Simpson',
  });
  const [marge, setMarge] = useState({
    imgUrl: 'https://media.npr.org/assets/img/2013/05/07/ap0908140151727_vert-06dfa531201681c1ebe2d126471494fdeb5048ae-s1100-c50.jpg',
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
    imgUrl: 'https://mystickermania.com/cdn/stickers/7/1837-512x512.png',
    clickedOn: false,
    name: 'Abe Simpson',
  })
  const [milhouse, setMilhouse] = useState({
    imgUrl: 'https://www.lessimpson.fr/wp-content/uploads/les-simpson-milhouse-van-houten.webp',
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

  const [cardArr, setArr] = useState([]);

  useEffect(() => {
    setArr([homer, marge, bart, lisa, maggie, abe, milhouse, ned, nelson, apu]);
  }, [])

  return (
    <div id="container">
      <h1 id="mainTitle"> Memory Card Game</h1>
      <GeneralOverview
        cardArr = {cardArr}
      />
    </div>
  );
}

export default App;
