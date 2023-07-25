// Object type
type Props = {
    data: {
        title: string,
        thumbnail: string,
        extract: string
    },
    children?: React.ReactNode
}

const ProductList = function ({ data }: Props) {
    return <article className="group">
        <div className="product-item men">
            <div className="product discount product_filter">
                <div className="product_image">
                    <img src="images/product_1.png" alt="" />
                </div>
                <div className="favorite favorite_left"></div>
                <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                <div className="product_info">
                    <h6 className="product_name"><a href="single.html">{data.title}</a></h6>
                    <div className="product_price">$520.00<span>$590.00</span></div>
                </div>
            </div>
            <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
        </div>


        <div className="p-4">
            <a href="#">
                <h3 className="text-lg font-medium text-gray-900">

                </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {data.extract}
            </p>
        </div>
    </article>
}

export default ProductList