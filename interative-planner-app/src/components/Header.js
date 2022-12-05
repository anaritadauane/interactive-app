import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>
        <header>
            <h1>{ title }</h1>
            <div className='links'>
                <a href="/">Daily Tasks</a>
                <span>    </span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </header>
    </div>
  )
}

export default Header;

Header.defaultProps ={
    title: 'Interactive Planner',
}

Header.propTypes = {
    title: PropTypes.string,
}
