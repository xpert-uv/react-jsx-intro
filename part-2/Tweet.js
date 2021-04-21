const Tweet = ({ username, message }) => {
    let date = new Date();
    return (<ul>
        <li>username:{username}</li>
        <li>message:{message}</li>
        <li>Date:{date.toString()}</li>

    </ul>)
}