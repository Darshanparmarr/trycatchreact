import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Lecture5() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`https://dummyjson.com/products`)  
                console.log('Response', response.data.product);
                setProducts(response.data.products)
            } catch(err) {
               console.log("Error", err); 
            }
        }
        fetchData()
    }, [])
    const handleViewDetails = (id) => {
        navigate(`/view-details/${id}`)
    }
  return (
      <>
      <h1>Lecture 5</h1> 
          {products.map((elem) => {
              return (
                  <div key={elem.id}>
                      <h2>{elem.title}</h2>
                      <button onClick={()=>handleViewDetails(elem.id)}>View Detail</button>
                  </div>
              )
          })}
    </>
  )
}

export default Lecture5