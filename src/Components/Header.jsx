import "./Header.css"
import {dataType} from "./dummy.jsx"

const Header = () => {
  return (
    <header className='MainHeader'>
        <article className='HeaderLeft'>
            <img src="https://www.techinafrica.com/wp-content/uploads/2019/08/icon.png" alt="Logo" />            
            <ul>
                {dataType.map((list,)=>(
                <li key={list.id}>{list.name}</li>
                ))}
            </ul>
        </article>
        <aside className='HeaderRight'>
        </aside>
    </header>
  )
}

export default Header