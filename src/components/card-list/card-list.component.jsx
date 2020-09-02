import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    // "children" are actually what you pass in between the brackets of our component.
    <div className='card-list'> 
    { 
        props.monsters.map(monster => 
            ( 
            <Card key={ monster.id } monster={ monster } />
            )
    )}
    </div>
); 