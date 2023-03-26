import { React } from 'react';
import './item-card.style.css';
import { useStore } from '../../dev-data/store';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

const ItemCard = ({ item }) => {
  const { addToCart, cart, increment } = useStore();

  const handleClick = (e) => {
    e.preventDefault();

    // If the item is already in the cart increment the quantity by one instead of adding a new item to the cart
    if (cart.find((cartItem) => cartItem.id === item.id)) {
      increment(item);
    } else {
      addToCart({
        id: item.id,
        category: item.category,
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    }

    console.log(cart);
  };

  return (
    <div className='item-card'>
      <Card>
        <CardContent>
          <Typography variant='h6'>{`$${item.price} ${item.name} `}</Typography>
          <img src={item.imageUrl} alt={item.imageUrl} id={item.id} />
        </CardContent>
        <CardActions>
          <Button
            size='small'
            onClick={handleClick}
            item={item.name}
            price={item.price}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
