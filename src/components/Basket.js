import React from 'react'

function Basket(props) {
    const { cartItems , onRemove } = props;
    // const [line, setLine] = useState(false);
    // const cutIt = () => {
    //     setLine(true);
    // }
    return (
        <>
            <aside className="block2 col-2">
                <h2>Basket</h2>
                <div>
                    {cartItems.length === 0 && <div>Cart is Empty </div>}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2"
                           >{item.name}</div>
                        <div className="col-2">
                            <button onClick ={() => onRemove(item)} className = "remove">
                                -
                            </button>
                        </div>

                        <div className="col-2 text-right">
                            {item.qty}
                        </div>
                    </div>

                ))}
            </aside>
        </>

    )
}

export default Basket
