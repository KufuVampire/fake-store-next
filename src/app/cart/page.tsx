"use client"
import { ProductList } from '@/components'

import { useAppDispatch, useAppSelector } from '@/hooks'

import styles from './Cart.module.css'
import { useMemo } from 'react'
import { addProduct, removeProduct } from '@/store/slices/productSlice'
import { add, deleteFromCart } from '@/store/slices/cartSlice'

// type CallbackType = {
// 	cb: (event: React.MouseEvent<HTMLButtonElement>) => void
// 	addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void
// }

export default function Page() {
	const { productsAll, favorites } = useAppSelector(state => state.products);
	const { cart } = useAppSelector(state => state.cart)

	const favoritesId = favorites.map(el => el.id)

	const dispatch = useAppDispatch()

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

	const totalAmount = useMemo(() => {
		return cart.reduce((a, b) => a + b.price, 0).toFixed(2)
	}, [cart])

	return (
		<section className={styles.section}>
			<h2 className={styles.h2}>
				Cart
			</h2>
			<h3 className={styles.totalPrice}>Total amount: {totalAmount}</h3>
			<ProductList list={cart} cb={handleClickLike} addToCart={addToCart} />
		</section>
	)
}