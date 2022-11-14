import fullStar from '../../assets/image/fullStar.png'
import star from '../../assets/image/star.png'
import './Rating.scss'


function Rating({rating}) {
  
 return (
    <>
        {rating === "1" && (
        <>
       <img src={fullStar} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        </>
    )}
           {rating === "2" && (
        <>
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        </>
    )}
           {rating === "3" && (
        <>
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        </>
    )}
           {rating === "4" && (
        <>
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
        <img src={star} alt="" />
        </>
    )}
           {rating === "5" && (
        <>
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />
       <img src={fullStar} alt="" />  
        </>
    )}
    </>

  )
}

export default Rating