import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const { isAuth} = useContext(AuthContext);

  return (
      <div>
       <p>{isAuth ? "LogOut" : "LogIn"}</p>
          <Cart/>
    </div>
  )
}

export default Product