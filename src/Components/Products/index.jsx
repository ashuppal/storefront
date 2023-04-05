
//after the category is done - this step
//import { connect } from "react-redux";
import { Card } from "@mui/material";
import { addItem } from "../../store/actions";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.category);

  return (
    <>
      {activeCategory && products.map((product, index) => (
        <Card data-testid={`product-${index}`} key={`product-${index}`} variant="outlined">
          {product.name}
          <Button variant="text" onClick={() => dispatch(addItem(product))}>Add Item</Button>
        </Card>
      ))}
    </>
  )
};

export default Products;