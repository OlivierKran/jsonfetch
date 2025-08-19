import useFetch from "./useFetch";

export default function People() {

    const [loading, items] = useFetch('data.json');

    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>City</th>
                <th>Age</th>
                <th>Friends</th>
                <th>Hobbies</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.age}</td>
                <td>{item.friends.name}
                    {item.friends.map((friends) => (
                        <tr key={friends.index}>
                            <td>{friends.name}</td>
                        </tr>
                    )
                    )}
                </td>
                <td>{item.friends.hobbies}
                    {item.friends.map((hobbies) => (
                        <tr key={hobbies.index}>
                            <td>{hobbies.hobbies.join(', ')}</td>
                        </tr>
                    )
                    )}
                </td>
            </tr>)}
        </tbody>
    </table>
}