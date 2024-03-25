import {Link} from 'react-router-dom'
import ProductCard from '../components/products-card'
const addToCartHandler = () =>{

};
const Home = () => {
  return (

    <div className='home'>
    <section>
       
    </section>
    <h1>
      new products
      <Link to="/search" className='findmore' >
        more
      </Link>
    </h1>
     <main>
      <ProductCard
      productId='skflas'
      name='keybord'
      price={10000}
      stock={20}
      handler={addToCartHandler}
      photo='https://m.media-amazon.com/images/I/61oCoa9FtqL._SX425_.jpg'
      /> 
     </main>
    </div>
  )
}

export default Home