import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-conatainer">
                        <img src={urlFor(image && image [0])} />
                    </div>
                    {/*<div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                src={urlFor(item)}
                                className=""
                                onMouseEnter=""
                            />
                        ))}
                    </div> */}
                </div>
                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div classname="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details:</h4>
                    <p>{details}</p>
                    <p className="price">R{price}</p>
                    <div classname="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc">
                            <span className="minus"
                            onClick=""><AiOutlineMinus /></span>
                            <span className="num"
                            onClick="">0</span>
                            <span className="plus"
                            onClick=""><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onclick="">Add to Cart</button>
                        <button type="button" className="buy-now" onclick="">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike- products-container">
                        {products.map((item) => (
                            <Product key={item.id} product={item} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product  = await client.fetch(query);
    const products  = await client.fetch
    (productsQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails