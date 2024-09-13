import useFetch from "./useFetch";

export default  function People (){

    const [loading, items] = useFetch('data.json');

    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>City</th>
                <th>Friends</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.friends.name}</td>
            {item.friends.map((friends) =>(
                    <tr key={friends.index}>
                        <td>{friends.name}</td>
                        <td>{friends.hobbies}
                        </td>
                    </tr>
                )
            )}
            </tr>)}
        </tbody>
    </table>
}