"use client"
import { ProductList } from '@/components'

import styles from './page.module.css'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { addProduct, getProducts, removeProduct } from '@/store/slices/productSlice'
import { useEffect } from 'react'
import { add, deleteFromCart } from '@/store/slices/cartSlice'

// type CallbackType = {
//   cb: (event: React.MouseEvent<HTMLButtonElement>) => void,
//   addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

export default function Home() {
  const { productsAll, favorites } = useAppSelector(state => state.products)
  const favoritesId = favorites.map(el => el.id)

  function handleClickLike(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target
    if (target !== undefined && target instanceof HTMLButtonElement && target.dataset) {
      const id = Number(target.dataset?.id)
      const favoritesObj = productsAll.find(el => el.id === id)
      if (favoritesObj && favoritesId.includes(favoritesObj.id)) {
        dispatch(removeProduct(id))
      } else {
        dispatch(addProduct(favoritesObj))
      }
    }
  }

  const { cart } = useAppSelector(state => state.cart)
  const cartId = cart.map(el => el.id)

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target
    if (target !== undefined && target instanceof HTMLButtonElement && target.dataset) {
      const id = Number(target.dataset?.id)
      const cartObj = productsAll.find(el => el.id === id)
      if (cartObj && cartId.includes(cartObj.id)) {
        dispatch(deleteFromCart(id))
      } else {
        dispatch(add(cartObj))
      }
    }
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>
        Products
      </h2>
      <ProductList list={productsAll} cb={handleClickLike} addToCart={addToCart} />
    </section>
  )
}
