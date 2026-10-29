export default function ProductCard(props) {
    return (
      <>
        {" "}
        <h1>{props.product.id}</h1>
        <h2>{props.product.title}</h2>
        <h2>{props.product.price}</h2>
      </>
    );
  }