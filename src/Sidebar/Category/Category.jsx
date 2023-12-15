import './Category.scss'

const Category = () => {
  return (
    <div className='category'>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value=""/>
          <span className="checkmark"></span> All
        </label>

        <label className="sidebar-label-container">
          <input 
            type="radio" 
            name="test" 
            value="sneakers"
            title="Sneakers"  
          />
          <span className="checkmark"></span> Sneakers
        </label>

        <label className="sidebar-label-container">
          <input 
            type="radio" 
            name="test" 
            value="flats"
            title="Flats"
          />
          <span className="checkmark"></span> Flats
        </label>

        <label className="sidebar-label-container">
          <input 
            type="radio" 
            name="test" 
            value="sandals"
            title="Sandals"
          />
          <span className="checkmark"></span> Sandals
        </label>

        <label className="sidebar-label-container">
          <input 
            type="radio" 
            name="test" 
            value="heels"
            title="Heels"
          />
          <span className="checkmark"></span> Heels
        </label>
      </div>
    </div>
  )
}

export default Category