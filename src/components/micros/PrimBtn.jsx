import React from 'react'
import { Link } from 'react-router-dom'

const PrimBtn = ({title, onClick, to}) => {
  return (
    <>
        <Link to={to} onClick={onClick} className="chiseled-button px-4 py-2 text-white text-md sm:text-lg rounded-md">{title}</Link>
    </>
  )
}

export default PrimBtn