// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];




// export default function People() {
//     const listItems = people.map((listItem, index) => {
//         return <li key={index}>{ listItem}</li>
//     })

//     return <ul>{ listItems}</ul>
// }



// Filtering arrays of items 

import {famousPeople} from './Data'


export default function People() {
    const chemists = famousPeople.filter((chemist) => {
        return chemist.profession === 'chemist';
    });
    const listItems = chemists.map((listItem) => {
        return <li key={listItem.id}>
            <h2>{listItem.name}</h2>
            <p>{listItem.profession} known for {listItem.accomplishment}</p>
        </li>
    });

    return <ul>{listItems}</ul>;
}
