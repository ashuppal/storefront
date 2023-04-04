
//after the category is done - this step
import { connect } from "react-redux";
import { Card, CardMedia } from "@mui/material";


const categoryImages = {
  "electronics": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",

  "food": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",

  "clothing": "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60.png"
}
const Products = ({products,activeCategory}) => {
  return(
    <>
    <CardMedia
      
        sx={{ height: 140 , width: 140}}
        image={categoryImages[activeCategory]}
      />
      
   {activeCategory && products.map((product, idx) => (
     <Card sx={{ maxWidth: 345 }} key={`product - ${idx}`} >
     
     {product.name}
      </Card>
    ))}
    </>
  )
}

const mapStateToProps = ({products}) => {
  return {
    products: products.products,
    activeCategory: products.activeCategory,
  }
}

export default connect(mapStateToProps)(Products);


