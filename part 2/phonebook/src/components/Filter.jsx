const Filter = ({ filterChange, filter }) => {
    return (
        <div>
            filter shown with <input onChange={filterChange} value={filter} />

        </div>

    )
}

export default Filter