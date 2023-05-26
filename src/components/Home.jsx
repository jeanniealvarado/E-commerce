import { useEffect, useState } from "react";
import '../styles/homeStyle.css'
import Navbar from "./navbar";
import { ProductList } from "./ProductList";
import { SearchBar } from "./SearchBar";
//import Header from "./header";



function Home () {
    const [products, setProducts]= useState ([])
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    //const [buscador, setBuscador]= useState ([])

    const peticionGet = () => {
        fetch('https://dummyjson.com/products',{
            method:'GET',
            headers:{
                'content-type': 'application/json'
            }
        })
          .then(response => response.json() )
          .then(data => {
            console.log(data.products);
            setProducts(data.products)
            setFilteredProducts(data.products)
          })
          .catch(error => {
            // Manejar el error
            console.error(error);
          });
      }
      
      
      
      
    useEffect(()=>{
        peticionGet();
    },[]);

    const handleSearch = (event) => {
      const term = event.target.value.toLowerCase();
      setSearchTerm(term);
  
      const filtered =
        term === ""
          ? products
          : products.filter((product) =>
              product.title.toLowerCase().includes(term)
            );
  
      setFilteredProducts(filtered);
    };

    return (
    <>
    <Navbar/>
    <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
     <ProductList filteredProducts={filteredProducts}/>
      
       
    </>
)}

export default Home;