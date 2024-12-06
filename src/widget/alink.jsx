import React from 'react'

function Alink(props) {
    const titleLink = "#"+props.link;
  return (
    <div>
      <a href={titleLink}  className='relative text-xl hover:text-white w-fit block after:block after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center' >{props.text}</a>
    </div>
  )
}

export default Alink
