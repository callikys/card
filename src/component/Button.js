import '../css/Button.css';

function Button(props) {
  return (
    <button className='button'>
      {props.title}
    </button>
  );
}

export default Button;