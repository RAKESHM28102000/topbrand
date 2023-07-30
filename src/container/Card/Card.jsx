import React from 'react'
import './Card.scss'
function Card(props) {
  return (
    <div className='card' style={{justifyContent:props.parentpostion}}>
       <div className='cardinner'>
        <div className='cardBox box1' style={{alignSelf:props.postion1}}>
          {/* <img src={`./images/about0${props.img1}.png`} alt='card1' width='400px' height='400px'/> */}
          <img className="imgincard" src='https://images.pexels.com/photos/872489/pexels-photo-872489.jpeg?auto=compress&cs=tinysrgb&w=600' alt='card1'/>
          <p className='para'> OUR SERVICE</p>
          <h2 className='head'>{props.head1}</h2>
        </div>
        <div className='cardBox box2' style={{alignSelf:props.postion2}}>
        {/* <img src={`./images/about0${props.img1}.png`} alt='card1' width='400px' height='400px'/> */}
        <img className="imgincard" src='https://images.pexels.com/photos/17224851/pexels-photo-17224851/free-photo-of-white-flying-drone.jpeg?auto=compress&cs=tinysrgb&w=600' alt='card1'/>
           <p className='para'> OUR SERVICE</p>
          <h2 className='head'>{props.head2}</h2>
       </div>
      </div>
    </div>
  )
}

export default Card;
