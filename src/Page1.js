import { useLocation, useParams } from "react-router-dom"

export const Page1 = () => {
    
    const {name} = useParams();

    const location = useLocation();
    console.log(location);
    const params = new URLSearchParams(location.search);

    const searchVal = params.get('search');
    const langVal = params.getAll('lang');

    console.log(langVal)

    return (
        <div>
            <h1>page 1</h1>

            <h4>Name: {name}</h4>
            <h4>Search: {searchVal}</h4>
            <h4>lang: {langVal}</h4>
        </div>
    )
}