import React from 'react'

const HeaderContainer = ({ title }) => {
  return (
    <div className="header-container">
        <h2>{title}</h2>
        <button>Add</button>
    </div>
  )
}

export default HeaderContainer