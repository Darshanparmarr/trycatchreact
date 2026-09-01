import { useEffect, useState } from "react"
import axios from 'axios'

const Lecture4 = () => {
    const [product, setProduct] = useState([])
    const [add, setAdd] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products')
                console.log('res', res.data.products);
                setProduct(res.data.products)
            } catch(err) {
                console.log('err',err);
            }
        }
        fetchData()
    }, [add])

    const handleClick = () => {
        setAdd(add + 1);
    }

    return (
        <>
            <h1>Added to Cart {add}</h1>
            <div>
                {product.map((elem) => {
                    return (
                        <>
                            <button onClick={handleClick}>{elem.title}</button>
                        </>
                    )
                
                })}

                
            </div>
        </>
    )
}

export default Lecture4