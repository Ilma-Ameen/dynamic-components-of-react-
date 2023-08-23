function ButtonComponent(props) {
    const { onclick, text } = props;
  
    return (
      <button onclick={onclick}>{text}</button>
    );
 }

 export default ButtonComponent;