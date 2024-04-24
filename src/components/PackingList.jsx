// const Item = ({ name, isPacked }) => {
//     return (
//         <li className="item">
//             {isPacked ? (
//                 <del> {name + ' ✔'} </del>
//             ) : ( 
//                 name
//             )}
//      </li>
//  )
// }
const Item = ({name, isPacked }) => {
    return (
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );  
}

   


export default function PackingList() {
    return (
        <section>
            <h2>Packing List</h2>
            <ul>
                <Item
                    name="Shoes"
                    isPacked={false}
                />
                <Item
                    name="Hours"
                    isPacked={false}
                />
                <Item
                    name="Diamonds"
                    isPacked={true}
                />
            </ul>
        </section>

    );
}