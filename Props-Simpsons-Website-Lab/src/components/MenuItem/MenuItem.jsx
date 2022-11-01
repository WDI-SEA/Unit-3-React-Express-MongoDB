import React from 'react'
import './MenuItem.css'
import SubMenuItem from '../SubMenuItem/SubMenuItem'
import { useState } from 'react'

function MenuItem() {

    let [state, setState] = useState(
        {
            links: [
                {
                    title: 'Flanders Facts',
                    link: '#'
                },
                {
                    title: 'Favourite Drinks at Mo\'s',
                    link: '#'
                },
            ]
        }
        )

  return (
      <li className="trigger"><a href="/#">MENU ITEM</a>
          <ul className="submenu">
              {/* <li><a href="/#">Link 1</a></li>
              <li><a href="/#">Link 2</a></li> */}

            
            {state.links.map(element => 
                
                <SubMenuItem title={element.title} link={element.link} />
                
                )}

          </ul>
      </li>
  )
}

export default MenuItem