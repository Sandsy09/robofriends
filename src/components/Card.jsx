const Card = ({ id, name, email }) => {
    return (
        <>
            <div className="bg-light-green tc dib br3 ma2 pa3 grow">
                <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </>
    )
}

export default Card