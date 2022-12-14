import ProductForm from "./ProductForm";

const CreateProduct = (props) => {
  const onCreateProduct = (product) => {
    // console.log(product)
    props.createProduct(product);
  }
  return (
    <div className="row"> 
      <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: 20}}>
        <ProductForm createProduct = {onCreateProduct} />
      </div>
    </div>
  );
};

export default CreateProduct;
