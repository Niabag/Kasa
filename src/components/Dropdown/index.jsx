import './Dropdown.scss'
import vectorDown from '../../assets/image/vector-down.png'
import vectorUp from '../../assets/image/vector-up.png'
import { useState } from 'react'

function Dropdown({dropdownBtnSmall,dropdownBtnWide}) {
const [isActive, setIsActive] = useState(false);
  return (
    <div className='dropdown'>
        <div className={dropdownBtnWide + " " + dropdownBtnSmall} onClick={(e) => setIsActive(!isActive)}>
            <p className='dropdown-title'>Fiabilité</p>
            {isActive && (<img className='dropdown-title' src={vectorUp} alt="" />)}
            {!isActive && (<img className='dropdown-title' src={vectorDown} alt="" />)}
        </div>
      {isActive && (
          <div className='dropdown-content' >
          <p className='dropdown-item'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </div>
      )}
    </div>
  )
}

export default Dropdown