import React,{Fragment,useEffect} from 'react'
import './Products.css'
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors, getProduct  } from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import Productcard from '../Home/Productcard'


const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());

  
   
  }, [dispatch])
  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products && 
            products.map((product)=>(<Productcard key={product._id} product={product}/>))}
          </div>
        </Fragment>)
}</Fragment>
  )
}
export default Products