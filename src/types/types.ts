export interface ApiError {
	message: string;
	error: string;
	statusCode: number;
}

export interface ProductItem {
	title: string
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	cb: (event: React.MouseEvent<HTMLButtonElement>) => void;
	addToCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductState {
	productsAll: ProductItem[];
	favorites: ProductItem[];
	cart: ProductItem[]
	loading: boolean;
	error: null | ApiError;
}
