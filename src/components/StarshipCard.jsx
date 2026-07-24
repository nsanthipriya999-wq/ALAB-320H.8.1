export default function StarshipCard({ starship }) {
    return (
        <div className="card">
            <h3>{starship.name}</h3>
            <p>Model:{starship.model}</p>
            <p>Manufacturer:{starship.manufacturer}</p>
            <p>Class: {starship.starship_class}</p>
            <p>Crew: {starship.crew}</p>
           <p>Passengers: {starship.passengers}</p>
          <p>Cost: {starship.cost_in_credits} credits</p>
    </div>
  );
}
      