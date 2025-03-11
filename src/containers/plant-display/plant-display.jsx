import PlantTable from "../../components/plant-table/plant-table.jsx";
import data from '../../data/plants.json';

export default function PlantDisplay() {

    return (
        <>
            <h3>La liste des plantes</h3>
            <PlantTable plants={data} />
        </>
    );
};