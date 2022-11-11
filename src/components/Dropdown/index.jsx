import './Dropdown.scss'
import vectorDown from '../../assets/image/vectorDown.png'
import vectorUp from '../../assets/image/vectorUp.png'
import { useState } from 'react'

function Dropdown({title, children, btnAbout, btnLodging, containeurAbout, containeurLodging}) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={containeurAbout+" "+containeurLodging}>
      <div className={btnAbout+" "+btnLodging} onClick={(e) => setIsActive(!isActive)}>
        <p className="dropdown-title">{title}</p>
        {isActive && <img className="dropdown-title" src={vectorUp} alt="" />}
        {!isActive && (
          <img className="dropdown-title" src={vectorDown} alt="" />
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          <p className="dropdown-item">
            {children}
          </p>
        </div>
      )}
    </div>
  )
}

export default Dropdown
