import React from 'react'

const Contact = () => {
  return (
    <div className="contact__page">
      <h1 className="primary-heading">Have Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact__page--form">
        <input type="mail" placeholder='yourmail@gmail.com' />
        <button className="secondaryButton">Submit</button>
      </div>
    </div>
  )
}

export default Contact
