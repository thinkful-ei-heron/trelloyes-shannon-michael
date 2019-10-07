import React from 'react';
import Card from './Card';

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

 const List = function(props) {
   let cardsMarkup = props.cards.map(card => <Card Title = {card.title} Content = {card.content}/>).join('\n');
   return (
     <section className = 'List'>
       <header className = 'List-header'>
         <h2>{props.header}</h2>
       </header>
       <div className='List-cards'>
         {cardsMarkup}
         <button type='button' className='List-add-button'>
           + Add Random Card
         </button>
      </div>
     </section>
   )
 }

 export default List;
