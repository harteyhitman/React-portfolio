import React from 'react'


const ScrollableContainer = () => {
	

	const scrollToBottom = () => {
		window.scrollTo({
		  top: document.documentElement.scrollHeight,
		  behavior: 'smooth',
		});
	  };
  return (
    <div id='scroll' onClick={scrollToBottom}>
		<span></span>
		<span></span>
		<span></span>
	  </div>
  )
}

export default ScrollableContainer