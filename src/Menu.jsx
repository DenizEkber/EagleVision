import { Button } from "semantic-ui-react";


function Menu({ OverHide }) {

    return (
        <div className="MenuStyle">
            <button onClick={OverHide} data-dropdown className="Menu">
                <a href="#"  >Menu</a>
            </button>
        </div>
    );
}
function MenuDiv({ value }) {
    //console.log(value);
    return (
        <div className={value ? "Block" : "Hide"} style={{
            border: '2px solid black',
            width: '250px',
            zIndex: '1000',
            height: '100vh',
            float: 'left',
            backgroundColor: 'lightcyan'
        }}>
            <Button onClick={()=>{
                window.location.href=" https://evowars.io/?v=2.13.1&play=game"
            }}>
                Fight Game
            </Button>
        </div>
    );
}
export default Menu;
export { MenuDiv };