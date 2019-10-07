import React from 'react';
import Card from './Card';
import './List.css';

/* <section class="List">
 *  <header class="List-header">
 *    <h2>First list</h2>
 *  </header>
 *  <div class="List-cards">
 *    <<cards>>
 *    <button type="button" class="List-add-button">
 *      + Add Random Card
 *    </button>
 *  </div>
 * </section>
 */

const List = function (props) {
  let cards = props.cards.map((card, i) => <Card title={card.title} content={card.content} key={'card' + i} />);
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cards}
        <button type='button' className='List-add-button'>
          + Add Random Card
         </button>
      </div>
    </section>
  )
}

export default List;
