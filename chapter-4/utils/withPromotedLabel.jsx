import React from "react";

// Higher order fucntion --> takes component as input and then enhace it ----> returns a new component with out changing the previous function.
const withPromotedLabel = (RestroCards) => {
  return (props) => {
   return  (<div>
      <div className="isPromoted">Promoted</div>

      <RestroCards {...props}/>
    </div>)
  };
};

export default withPromotedLabel;
