

const RestroCards = (props) => {

    const {cft, name,rating,img} = props;
    let {ind} = props;
    return (
      <div key={ind} className="res-card">
        <img className="res-card-img" src={img.url} alt="img"/>
        <h1 className="res-name">{name}</h1>
        <span className="res-itm-price">Price: {cft.text}</span>
        <span className="res-itm-rating">Rating: {rating}</span>
        
      </div>
    );
  };

  export default RestroCards;