import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder, handler}) => {
    return(
        <div>
            <input 
                className='search'
                type='search'
                placeholder={placeholder}
                onChange={handler}
            >
            </input>
        </div>
    )
}