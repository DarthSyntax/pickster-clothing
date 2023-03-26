import { React } from 'react';
import CategoryContainer from '../../components/category-container/category-container.component';
import Header from '../../components/header/header.component';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Header />
      <CategoryContainer />
    </div>
  );
};

export default HomePage;
