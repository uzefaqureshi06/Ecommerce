const TopProducts = () => {
  return (
    <>
      <div className="small-container">
        <div className="category">
          <h2 className="title">Top Products</h2>

          <div className="row">    
            <div className="col-3">
              <img src="images/category-1.jpg" alt="Category 1"/>
            </div>
            <div className="col-3">
              <img src="images/category-2.jpg" alt="Category 2"/>
            </div>
            <div className="col-3">
              <img src="images/category-3.jpg" alt="Category 3"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
