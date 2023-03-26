import { React } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useStore } from '../../dev-data/store';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../../components/header/header.component';
//import { click } from '@testing-library/user-event/dist/click';
import ItemCard from '../../components/item-card/item-card.component';
import './category-shop.style.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CategoryShopPage = () => {
  const { data } = useStore();
  const { category } = useParams();

  return (
    <div className='shop-page'>
      <Header />
      <div className='category-items'>
        <Grid container spacing={3}>
          {data
            .filter((item) => item.category === category)
            .map((item) => {
              return (
                // <Grid item xs={3} key={item.id}>
                //   <span style={{ textAlign: 'center' }}>
                //     ${item.price} {item.name}
                //   </span>
                //   <img src={item.imageUrl} alt={item.imageUrl} id={item.id} />
                // </Grid>
                <ItemCard item={item} key={item.id} />
              );
            })}
        </Grid>
      </div>
    </div>
  );
};

export default CategoryShopPage;
