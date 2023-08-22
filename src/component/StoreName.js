import "../css/StoreDetail.css"

function StoreName(props) {
    return (
      <div className='storenamebox'>
        <span>{props.name}</span>
      </div>
    );
  }
  
  export default StoreName;