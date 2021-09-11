import s from './style.module.css'

const PokemonCard = (props) =>{
 return (

<div className={s.root}>
      <div className={s.pokemonCard}>
        <div className={s.cardFront}>
            <div className={`${s.wrap} ${s.front}`}>
                <div className={`${s.pokemon} ${s[props.type]}`}>
                    <div className={s.values}>
                        <div className={`${s.count} ${s.top}`}>{props.value.top}</div>
                        <div className={`${s.count} ${s.right}`}>{props.value.right}</div>
                        <div className={`${s.count} ${s.bottom}`}>{props.value.bottom}</div>
                        <div className={`${s.count} ${s.left}`}>{props.value.left}</div>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={props.img} alt={props.name} />
                    </div>
                    <div className={s.info}>
                        <span className={s.number}>{props.id}</span>
                        <h3 className={s.name}>{props.name}</h3>
                        <small className={s.type}>Type: <span>{props.type}</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={s.cardBack}>
            <div className={`${s.wrap} ${s.back}`}>
                <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0a722b8b-d83c-42ff-9044-2019adf1ff3b/card-back-side.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210911T083250Z&X-Amz-Expires=86400&X-Amz-Signature=b2850d8f683a355e066c365cc27e9600017a4553415ed82f6e0ae12cd137d553&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22card-back-side.jpg%22' alt='Сard Backed' />
            </div>
        </div>

    </div>
</div>


 	)
};

export default PokemonCard