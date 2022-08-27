import Spinner from "react-bootstrap/Spinner";

function Spinners() {
  return (
    <Spinner style={{fontSize:"500px",display:"block",margin:"auto",color:"#c69c6d",marginTop:"5rem"}} animation="border" role="status">
      <span className="visually-hidden" >Loading...</span>
    </Spinner>
  );
}

export default Spinners;

