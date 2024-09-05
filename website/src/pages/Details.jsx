import React, { useState } from 'react';

const Details = () => {
  // State to manage the currently displayed product image
  const [productImg, setProductImg] = useState('/images/gallery-1.jpg');

  // Handler function for changing the main image
  const handleImageClick = (src) => {
    setProductImg(src);
  };

  return (
    <div>
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2">
            <img src={productImg} width="100%" id="ProductImg" alt="Product" />

            <div className="small-img-row">
              <div className="small-img-col">
                <img
                  src="/images/gallery-1.jpg"
                  width="100%"
                  className="small-img"
                  alt="Gallery Thumbnail 1"
                  onClick={() => handleImageClick('/images/gallery-1.jpg')}
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/images/gallery-2.jpg"
                  width="100%"
                  className="small-img"
                  alt="Gallery Thumbnail 2"
                  onClick={() => handleImageClick('/images/gallery-2.jpg')}
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/images/gallery-3.jpg"
                  width="100%"
                  className="small-img"
                  alt="Gallery Thumbnail 3"
                  onClick={() => handleImageClick('/images/gallery-3.jpg')}
                />
              </div>
              <div className="small-img-col">
                <img
                  src="/images/gallery-4.jpg"
                  width="100%"
                  className="small-img"
                  alt="Gallery Thumbnail 4"
                  onClick={() => handleImageClick('/images/gallery-4.jpg')}
                />
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className='col'>
              <p>Home / T-Shirt</p>
              <h1>Red Printed T-Shirt by HRX</h1>
              <h4>$60.00</h4>
            </div>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type="number" value="1" />
            <a href="#" className="btn">Add To Cart</a>
            <h3>Product Details   <i className='bx bx-right-indent'></i></h3>
            <br />
            <p>Give Your Summer Wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or with denim for an evening out.</p>
          </div>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>

      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select className="selec">
            <option>Default Sorting</option>
            <option>Sort by Price</option>
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
            <option>Sort by Sale</option>
          </select>
        </div>

        <div className="small-container">
          <div className="row">
            <div className="col-4">
              <img src="/images/product-9.jpg" alt="Product 9" />
              <h4>Printed T-Shirt</h4>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <p>$50.00</p>
            </div>
            <div className="col-4">
              <img src="/images/product-10.jpg" alt="Product 10" />
              <h4>Printed T-Shirt</h4>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half'></i>
                <i className='bx bxs-star-half'></i>
              </div>
              <p>$50.00</p>
            </div>
            <div className="col-4">
              <img src="/images/product-11.jpg" alt="Product 11" />
              <h4>Printed T-Shirt</h4>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
              </div>
              <p>$50.00</p>
            </div>
            <div className="col-4">
              <img src="/images/product-12.jpg" alt="Product 12" />
              <h4>Printed T-Shirt</h4>
              <div className="rating">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star-half'></i>
                <i className='bx bx-star'></i>
              </div>
              <p>$50.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
