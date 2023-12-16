import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './Sidebar.scss'

const Sidebar = ({handleChange}) => {
  // console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__logo-container">
          <h1 className='sidebar__title'>🛒</h1>
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  )
}

export default Sidebar