import style from './plant-table.module.css';

function PlantTableHead() {
    return (
        <thead>
            <tr>
                <th>Nom</th>
                <th>Couleurs</th>
                <th>Comestible</th>
                <th>Toxique</th>
            </tr>
        </thead>
    );
}

function PlantTableRow({ name, colors, toxicity, edible }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{colors?.join(', ') ?? 'N/A'}</td>
            <td>{edible ? '🍽️' : '🤮'}</td>
            <td>{toxicity && '☠️'} </td>
        </tr>
    );
}

export default function PlantTable({ plants = [] }) {

    return (
        <table className={style.plants}>
            <PlantTableHead />
            <tbody>
                {plants.map(plant => <PlantTableRow key={plant.id} {...plant} />)}
            </tbody>
        </table>
    );
};