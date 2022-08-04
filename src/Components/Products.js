let productCount =0;
let imageUrl = require("../images/Milk.jpg");
let isAvailable = 'Available';

let badgeClass = 'badge';
badgeClass += isAvailable === 'Available' ? 'bg-success' : 'bg-danger';
// let style = {
//   padding: '0px 20px',
//   fontSize: 14,
// }

function displayFormattedProductCount(){
 return productCount > 0 ? productCount : 'Zero';
}

function Products() {
  return (
    <ul className="list-group shadow" >
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
            <p className="font-italic text-muted mb-0 small">Whatever this guy wrote I did not understand. A complete foreign language I must say. </p>
            <div className="d-flex align-items-center justify-content-start mt-1">
              <h6 className="font-weight-bold my-2" style={{'margin-right': 30}}>$120.00</h6>
              <button className="btn btn-primary">-</button>
              <span style={{padding: '0px 14 px', 'font-size': 14}} >{displayFormattedProductCount()}</span>
              <button className="btn btn-primary">+</button>
              <span className={badgeClass}>{isAvailable}</span>
            </div>
          </div>
          <img src={imageUrl} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
        </div>
      </li>
    </ul>
  );
}
export default Products;
