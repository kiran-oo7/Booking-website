import "./searchItem.css"

function SearchItem() {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/236236692.webp?k=46d25a29a4f73d355e12f558eb846d9fbe6e55ef147412f0e72dbb3f5ec5737e&o=&s=1" 
        alt="" 
        className="siImg" />
         <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">4999</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availabilty</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem