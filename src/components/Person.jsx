

const Person = (person) => {
    const {image,name,age} = person;
    return (
        <div className="person">
            <figure className="person__img">
                <img src={image} alt={name} />
            </figure>
            
            <h4 className="person__name">{name}</h4>
            <p className="person__age">{age} years</p>
        </div>
    );
}

export default Person;