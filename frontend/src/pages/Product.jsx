import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12">
        {/* Left side with thumbnails and main image */}
        <div className="w-2/3 flex gap-6">
          {/* Thumbnail images */}
          <div className="w-[100px]">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                alt={`Product view ${index + 1}`}
                className={`w-full mb-4 cursor-pointer hover:opacity-80 transition-opacity ${
                  image === item ? "border border-gray-300" : ""
                }`}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 h-[600px]">
            {" "}
            {/* Added fixed height */}
            <img
              src={image}
              className="w-full h-full object-contain"
              alt="Main product"
            />
          </div>
        </div>

        {/* Right side product details */}
        <div className="w-1/3 pt-4">
          <h1 className="text-2xl font-medium mb-2">{productData.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {"★".repeat(Math.floor(productData.rating || 4))}
              {"☆".repeat(5 - Math.floor(productData.rating || 4))}
            </div>
            <span className="text-gray-500">
              ({productData.reviews || 122})
            </span>
          </div>

          <div className="text-2xl font-medium mb-6">${productData.price}</div>

          <p className="text-gray-600 mb-8">
            {productData.description ||
              "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment."}
          </p>

          <div className="mb-6">
            <h3 className="font-medium mb-3">Select Size</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border border-gray-300 hover:border-black flex items-center justify-center"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 px-6 mb-8">
            ADD TO CART
          </button>

          <div className="space-y-2 text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0" />
  );
};

export default Product;
