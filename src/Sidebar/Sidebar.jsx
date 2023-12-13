import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__logo-container">
          <h1 className='sidebar__title'>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  )
}

export default Sidebar