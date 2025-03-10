import style from './intro-react.module.css';

export default function IntroReact({ nb = 5 }) {

    const double = nb + nb;

    return ( 
        <p>
            Lorem ipsum ! 
            <br />
            <span className={style['les-chiffres']}>Le double de {nb} est {double} !</span> 
            <br />
            <span className={style.exemple}>Perspiciatis nobis </span> 
            eveniet fuga?
        </p>
    );
}
