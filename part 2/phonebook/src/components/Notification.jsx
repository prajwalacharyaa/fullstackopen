const Notification = ({ message }) => {
    if (message === null) {
        return null
    } return (
        <div className="notificationTop">
            {message}
        </div>
    )
}

export default Notification