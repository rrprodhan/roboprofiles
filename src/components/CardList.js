import Card from './Card';

const CardList = ({robots}) => {
    // const cardsArray = robots.map( (user, index) => {
    //     return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    // });
    
    return (
        <>   
            {
                robots.map((user) => {
                    return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
                })
            } 
            {/* {cardsArray} */}
        </>
    );
};

export default CardList;