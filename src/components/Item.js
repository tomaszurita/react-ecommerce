
import { Link } from 'react-router-dom';
import { ProductContainer, Circle, Image, Info, Icon } from './StyledComponents.js';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <strong>$ {price}</strong>
                </Icon>
                <Icon>
                    {stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <Link to={`/item/${id}`}>Details</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;