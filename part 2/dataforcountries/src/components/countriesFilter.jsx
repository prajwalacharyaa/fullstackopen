const Filter = ({ filterChange, filter }) => {
    return (
        <div>
            <p>find countries <input onChange={filterChange} value={filter} />
            </p>
        </div>
    )
}

export default Filter