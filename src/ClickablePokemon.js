const openDetails = (id) => {
  console.log('open the details' + id);
};

function ClickablePokemon(props) {
  return (
    <li>
    <button onClick={() => openDetails(props.id)}>
        <img src={props.spriteUrl} alt={props.name} />
    </button>
    </li>
  )
};  

export default ClickablePokemon;