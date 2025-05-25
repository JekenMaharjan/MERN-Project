import React from 'react'

const productList = [
    {
      "productName": "Smartphone Holder for Car",
      "price": {
        "original": 15.99,
        "discounted": 12.99
      },
      "imageUrl": "https://m.media-amazon.com/images/I/71NiHJFNPHL.jpg"
    },
    {
      "productName": "Wireless Ergonomic Mouse",
      "price": {
        "original": 25.00,
        "discounted": 19.99
      },
      "imageUrl": "https://bestdealsnepal.com.np/wp-content/uploads/2024/05/712lnFEvo8L._AC_SL1500_.jpg"
    },
    {
      "productName": "Stainless Steel Water Bottle",
      "price": {
        "original": 20.00,
        "discounted": null
      },
      "imageUrl": "https://www.jiomart.com/images/product/original/rvf3chhxto/the-better-home-deep-blue-stainless-steel-insulated-water-bottle-1-litre-product-images-orvf3chhxto-p600061367-0-202304011152.jpg?im=Resize=(1000,1000)"
    },
    {
      "productName": "Portable Bluetooth Speaker",
      "price": {
        "original": 45.00,
        "discounted": 39.99
      },
      "imageUrl": "https://www.olizstore.com/media/catalog/product/cache/a04ec30316eb04ee0a0c68cae51f73f4/j/b/jbl_jblflip6blkam_flip_6_waterproof_bluetooth_1693528.jpg"
    },
    {
      "productName": "Yoga Mat with Carrying Strap",
      "price": {
        "original": 30.00,
        "discounted": null
      },
      "imageUrl": "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/61SZT00JUXL.jpg"
    }
  ]

const ProductCard = (props) => {
    return(
        <div className='p-5 m-2 shadow-xl w-full h-full bg-gray-300 rounded-xl items-center text-center flex flex-col gap-y-5'>
            <h1 className='mt-2 text-xl font-bold'>
                {props.productName}
            </h1>
            <img 
                src={props.imageUrl} 
                alt={props.productName} 
                className='w-full h-42 object-contain rounded-xl'
            />
            <p className='line-through'>
                Original Price: ${props.price}
            </p>
            <p>
                Discounted Price: ${props.discount ?props.discount :props.price}
            </p>
            <button className='bg-yellow-500 w-full h-10 rounded-xl cursor-pointer'>Add to Cart</button>
        </div>
    )
}

const Ecom = () => {
    return (
        <div className='flex flex-col bg-slate-600 h-screen w-screen'>
            <div className='m-5 p-5 item-center text-center text-4xl font-bold text-red-200'>
                <h1>Hamro Pasal</h1>
            </div>
            <div className='flex'>
                {productList.map((item,id)=>{
                    return(
                        <ProductCard key={id} productName={item.productName} price={item.price.original} discount={item.price.discounted} imageUrl={item.imageUrl}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Ecom