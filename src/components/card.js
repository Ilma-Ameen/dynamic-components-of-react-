import card from './card.css'

function Card(props){
  const { name, age, location} = props;
    return (
      <div className="card">
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{location}</p>
      </div>
    );
};

export default Card;