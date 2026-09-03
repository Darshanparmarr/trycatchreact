import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"    

function Lecture5ViewDetails() {

    const {id} = useParams()
    const [products, setProducts] = useState([])

    // const fetchData = async () => {
    //     const response = await axios.get(`https://dummyjson.com/product/${id}`)
    // }

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://dummyjson.com/product/${id}`)  
                console.log('Response', response.data);
                setProducts(response.data)
            } catch(err) {
               console.log("Error", err); 
            }
        }
        fetchData()
    }, [])
    
  return (
    <>
    <h1>Product Id is {id} </h1>
          <h2>{products.title}</h2>
          <p>{products.description}</p>
    </>
  )
}

export default Lecture5ViewDetails