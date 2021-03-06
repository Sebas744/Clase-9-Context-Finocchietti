
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <article className="cardItem">
      <h3>{producto.nombre}</h3>
      <img src="https://via.placeholder.com/300x300" alt="" />
      <p>Precio : $ {producto.precio}</p>
      {/*<p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
        })} </p>*/}
      <Link
        to={`/item/${producto.id}`}
        key={producto.id}
        className="botonSuma btn-primary"
      >
        Ver Detalle
      </Link>
    </article>
  );
};

export default Item;









/*********************CODIGO EN REVISION*************/

// import { Link } from "react-router-dom"

// const Item = ({producto}) => {
//   return(
//     <article className="card">
//     <h3>{producto.nombre}</h3>
//     <img src="http://via.placeholder.com/200x200" alt="card"/>
//     <p>Categorias: {producto.categorias.map(categoria=>{
//       return <span>{categoria}</span>
//     })}</p>
//     <button>
//    <Link to={`/producto/${producto.id}`}> Detalle </Link>
//    </button>
//     </article>
//   )
// }
// export default Item

