const Person = (props) => {
    let vote = props.age >= 18 ? "Go vote " : "you must be 18";
    let hobbies = props.hobbies.map(r => <li>{r}</li>);
    return (
        <div>
            <p> Learn More about person </p>
            <ul>
                <li>Name:{props.name}</li>
                <li>Age:{props.age}</li>
                <ul>
                    Hobbies
                     {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}