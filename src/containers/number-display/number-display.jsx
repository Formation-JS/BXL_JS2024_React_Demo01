import style from './number-display.module.css';

export default function NumberDisplay({ value }) {

    const styleValue = (value < 0) ? style.negatif : style.positif;

    // let demoIf;
    // if(value < 0) {
    //     demoIf = style.demo + ' ' + style.negatif
    // }
    // else {
    //     demoIf = style.demo + ' ' + style.positif
    // }

    return (
        <>
            <p>Le nombre est <span className={`${style.demo} ${styleValue}`}>{value}</span></p>
            <p>C'est un nombre qui est {value % 2 === 0 ? 'pair' : 'impair'}</p>
            {(value === 42) && (
                <p>C'est la réponse 🥳 🎉🎊</p>
            )}
        </>
    );
};