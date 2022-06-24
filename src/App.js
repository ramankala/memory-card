import React, { useEffect, useState } from 'react';

import GeneralOverview from './components/GeneralOverview';
import ScoreBoard from './components/ScoreBoard';
import './styles/App.css'

function App() {

  const [state, setState] = useState({
    homer: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
      clickedOn: false,
      name: 'Homer Simpson',
    },
    marge: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png',
      clickedOn: false,
      name: 'Marge Simpson',
    },
    bart: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
      clickedOn: false,
      name: 'Bart Simpson',
    },
    lisa: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
      clickedOn: false,
      name: 'Lisa Simpson',
    },
    maggie: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
      clickedOn: false,
      name: 'Maggie Simpson',
    },
    abe: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Abe_Simpson.png',
      clickedOn: false,
      name: 'Abe Simpson',
    },
    milhouse: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/Milhouse_Van_Houten.png',
      clickedOn: false,
      name: 'Milhouse Van Houten',
    },
    ned: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png',
      clickedOn: false,
      name: 'Ned Flanders',
    },
    nelson: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c6/Nelson_Muntz.PNG',
      clickedOn: false,
      name: 'Nelson Muntz',
    },
    apu: {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/en/2/23/Apu_Nahasapeemapetilon_%28The_Simpsons%29.png',
      clickedOn: false,
      name: 'Apu Nahasapeemapetilon',
    }

  })

  const {
    homer,
    marge,
    bart,
    lisa,
    maggie,
    abe,
    milhouse,
    ned,
    nelson,
    apu,
  } = state;

  const [cardArr, setArr] = useState([]);

  let simpsonArr = [homer, marge, bart, lisa, maggie, abe, milhouse, ned, nelson, apu]

  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0,
  });

  const {
    currentScore,
    bestScore,
  } = score;

  useEffect(() => {
    
    
    let shuffled = simpsonArr
      .map(value => ({ value, sort: Math.random()}))
      .sort((a,b) => a.sort - b.sort)
      .map(({value}) => value)


    setArr(shuffled);

  }, [homer, marge, bart, lisa, maggie, abe, milhouse, ned, nelson, apu])

  const handleShuffle = (e) => {
    let simpsonChar = e.target.alt.split(" ")[0].toLowerCase();
    if (simpsonChar === 'homer' && homer.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'homer' && homer.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'marge' && marge.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          marge: {
            ...prevState.marge,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'marge' && marge.clickedOn === true){
      if (currentScore > bestScore){
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
        }
      })
    }
    if (simpsonChar === 'bart' && bart.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          bart: {
            ...prevState.bart,
            clickedOn: true
          }
        }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'bart' && bart.clickedOn === true){
      if ( currentScore > bestScore ) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
          }
        }
      )
    }
    if (simpsonChar === 'lisa' && lisa.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          lisa: {
            ...prevState.lisa,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'lisa' && lisa.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'maggie' && maggie.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          maggie: {
            ...prevState.maggie,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'maggie' && maggie.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'abe' && abe.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          abe: {
            ...prevState.abe,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'abe' && abe.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'milhouse' && milhouse.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          milhouse: {
            ...prevState.milhouse,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'milhouse' && milhouse.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'ned' && ned.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          ned: {
            ...prevState.ned,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'ned' && ned.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'nelson' && nelson.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          nelson: {
            ...prevState.nelson,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'nelson' && nelson.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
    if (simpsonChar === 'apu' && apu.clickedOn === false){
      setState(prevState => {
        return {
          ...prevState,
          apu: {
            ...prevState.apu,
            clickedOn: true,
          }
         }
      })
      setScore((prevState) => {
        return {...prevState, currentScore: currentScore + 1}
      })
    }
    else if (simpsonChar === 'apu' && apu.clickedOn === true){
      if (currentScore > bestScore) {
        setScore((prevState) => {
          return {...prevState, bestScore: currentScore, currentScore: 0}
        })
      }
      else {
        setScore((prevState) => {
          return {...prevState, currentScore: 0}
        })
      }
      setState(prevState => {
        return {
          ...prevState,
          homer: {
            ...prevState.homer,
            clickedOn: false,
          },
          marge: {
            ...prevState.marge,
            clickedOn: false
          },
          bart: {
            ...prevState.bart,
            clickedOn: false,
          },
          lisa: {
            ...prevState.lisa,
            clickedOn: false,
          },
          maggie: {
            ...prevState.maggie,
            clickedOn: false,
          },
          abe: {
            ...prevState.abe,
            clickedOn: false,
          },
          milhouse: {
            ...prevState.milhouse,
            clickedOn: false,
          },
          ned: {
            ...prevState.ned,
            clickedOn: false,
          },
          nelson: {
            ...prevState.nelson,
            clickedOn: false,
          },
          apu: {
            ...prevState.apu,
            clickedOn: false,
          }
         }
      })
    }
  }

  return (
    <div id="container">
      <div id="headerContainer">
        <h1 id="mainTitle"> Memory Card Game</h1>
        <ScoreBoard 
          currentScore = {currentScore}
          bestScore = {bestScore}
        />
      </div>
      <div id='howToPlay'> Get points by clicking on an image but don't click on any more than once!</div>
      <GeneralOverview
        cardArr = {cardArr}
        handleShuffle = {handleShuffle}
      />

    </div>
  );
}

export default App;
