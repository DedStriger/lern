import './style.css'

const Layout = (props) =>{
console.log(props.colorBg)
let style = {
       backgroundImage : `url(${props.urlBg})`,
       backgroundSize : "contain",
       backgroundColor : props.colorBg
}
 return (
<section class="root">
    <div class="wrapper">
        <article>
            <div class="title">
                <h3>{props.title}</h3>
                <span class="separator"></span>
            </div>
            <div class="desc full" style={style}>
                <p>{props.desc}</p>
            </div>
        </article>
    </div>
</section>

 	)
};

export default Layout