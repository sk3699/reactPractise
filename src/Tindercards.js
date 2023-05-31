import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function Tindercards() {
    const [people, setpeople] = useState([
        {
            name: "Elon",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
        },
        {
            name: "Jeff",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!!");
    }

  return (
    <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>
        {people.map((person) => (
            <TinderCard className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir)=> swiped(dir, person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
                <div style={{backgroundImage: `url(${person.url})`}}
                    className='card'>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Tindercards
