import React from 'react'
import photo from './icons/sign.jpg';
const Sign_img = () => {
  return (
    <>
      <div className="right_data">
            <div className="sign_img">
                {/* <img src="./sign.jpg" alt=""/> */}
                <img src={photo} alt=""/>
            </div>
          </div>
    </>
  )
}

export default Sign_img
