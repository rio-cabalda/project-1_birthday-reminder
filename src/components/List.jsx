import Person from "./Person";



    const List = ({people}) => {
    console.log(people)
    
    return (<>
            <ul className="birthdayList">
                        
                {people.map((person)=>{
                return (
                    <li className="birthdayList__item" key={person.id}>
                        <Person   {...person} key={person.id}/>
                    </li>
                );
                })}
            </ul>
            
    </>);
    
}

export default List;