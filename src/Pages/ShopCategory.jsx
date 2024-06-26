import React, { useContext } from 'react'
import "../Pages/CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items'


const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} style={{width:"100%", height:"200px"}} alt='Luxhut Apparel' />
      <div className="shopcategory-product">
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div className='d-flex'>
                <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} contact={item.contact} campus={item.campus} description={item.description} email={item.email} />          
                </div>
              )
            }
            else {
              return null
            }

          })
        }
      </div>
    </div>
  )
}

export default ShopCategory
