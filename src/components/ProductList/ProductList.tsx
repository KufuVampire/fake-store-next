import { ProductItem } from './ProductItem/ProductItem'
import styles from './ProductList.module.css'

export interface ProductItemProps {
  title: string
  category: string
  description: string
  id: number
  image: string
  price: number
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void
  addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface ProductListProps {
  list: ProductItemProps[]
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void,
  addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function ProductList({ list, cb, addToCart }: ProductListProps) {
  return (
    <ul className={styles.list}>
      {list.length === 0 && <p>There is nothing here yet</p>}
      {list.map((product) => {
        return (
          <ProductItem key={product.id} {...product} cb={cb} addToCart={addToCart} />
        )
      })}
    </ul>
  )
}
