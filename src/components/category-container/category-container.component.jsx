import { React, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useStore } from '../../dev-data/store';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './/category-container.style.css';
import { Card, CardContent, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CategoryContainer = () => {
  const navigate = useNavigate();

  const { data, fetchData, categoryItems } = useStore();

  const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useLayoutEffect(() => {
    const getData = async () => {
      if (!data) await fetchData();
    };

    if (!data) getData();
    console.log(data);
  }, [fetchData, data]);

  const handleClick = (event) => {
    const category = categoryItems.find(
      (item) => item.id === event.target.id
    ).category;
    console.log(`${category} selected`);
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {categoryItems?.map((item) => {
          return (
            <Card
              className='categories'
              style={{ backgroundColor: '#efededca' }}
            >
              <CardContent className='category-card'>
                <Typography variant='h6'>{`${capitalizeString(
                  item.category
                )}`}</Typography>
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  id={item.id}
                  onClick={handleClick}
                />
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default CategoryContainer;
