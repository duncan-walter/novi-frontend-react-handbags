function Product({productName, productImage, productImageAlt, productLabelText, productPrice}) {
  return(
    <article>
      <span>{productLabelText}</span>
      <img src={productImage} alt={productImageAlt}/>
      <p>{productName}</p>
      <h4>€{productPrice},-</h4>
    </article>
  )
}

export default Product;