import React from 'react'

function Card ({children, classname}) {
  return (
    <div className={`bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 ${classname}`}>
        {children}
    </div>
  )
}

export default Card;
