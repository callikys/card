import "../css/StoreDetail.css"

function StoreName(props) {
    return (
      <div className='storenamebox'>
        <span>{props.storename}</span>
      </div>
    );
  }
  
  export default StoreName;