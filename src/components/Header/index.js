import './style.css'

const Header = (props) =>{
 return (
 <header className='root'>
  <div className='forest'></div>
     <div class="container">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
 </header>

 	)
};

export default Header