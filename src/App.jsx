import { useState } from 'react'
 
// import './App.scss'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

// Data
import products from './db/data';
import Card from './components/Card'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLocaleLowerCase() !== -1))

  // Radio Filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  // Buttons Filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected,query){
    let filteredProducts = products
    
    // Filtering Iput Items
    if(query){
      filteredProducts = filteredItems
    }

    // Selected Filter
    if(selected){
      if(selected){
        filteredProducts = filteredProducts.filter(
          ({category, color, company, newPrice, title}) => 
            category === selected || 
            color === selected || 
            company === selected || 
            newPrice === selected || 
            title ===  selected 
          )
      }
    }

    return filteredProducts.map(({img,title, star, reviews, prevPrice, newPrice}) => ( 
    <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    
    />))
  }

  return (
    <>
        <Sidebar />
        <Nav />
        <Recommended />
        <Products />
    </>
  )
}

export default App
