import React, { useState } from "react";

const ProductCard = ({ product, onUpdatePrice, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card shadow-sm mb-3"
      style={{
        width: "18rem",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={product.imageUrl}
        className="card-img-top rounded-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{product.name}</h5>
        <p className="card-text text-center" >
          Price: ${product.price.toFixed(2)}
        </p>
        <div className="d-flex justify-content-around">
          {/* Update button styled in green for a positive action */}
          <button
            className="btn btn-success btn-sm"
            onClick={() => onUpdatePrice(product.id)}
          >
            <i className="fa fa-plus"></i> Update
          </button>
          {/* Delete button retains red color as a warning */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(product.id)}
          >
            <i className="fa fa-trash"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
