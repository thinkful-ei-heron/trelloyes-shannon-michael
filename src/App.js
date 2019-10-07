import React from 'react';
import List from './List';
import './App.css';

function App(props) {
/**
 * iterate over all lists in store.lists
 * for each list, call List(header,cards)
 * header = list.header
 * cards = store.allCards.filter(card => list.cardIds.includes(card.id))
 */
  let listsJsxArr = [];
  for (let i = 0; i < props.store.lists.length; i++) {
    let list = props.store.lists[i];
    let header = list.header;
    let cards = [];
    for (let j = 0; j < list.cardIds.length; j++) {
      let cardId = list.cardIds[j];
      cards.push(props.store.allCards[cardId]);
    }
    listsJsxArr.push(<List header={header} cards={cards} key={'list' + i} />);
  }

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className = 'App-list'>
        {listsJsxArr}
      </div>
    </main>
  );
}

export default App;
