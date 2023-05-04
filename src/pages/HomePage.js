import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Cards from '../components/Card';
import { StyledGrid } from './Style';
// import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [show, setShow] = useState([]);
  // const navigate = useNavigate();
  console.log('data=======>', show);

  // It is for api handling
  const viewAllShows = async () => {
    await axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res) => {
      if (res) {
        setShow(res.data);
      }
    });
  };
  useEffect(() => {
    viewAllShows();
  }, []);
  return (
    <div>
      <Header />
      <StyledGrid container>
        {show?.length > 0 &&
          show?.map((data, index) => {
            return (
              <StyledGrid key={index} item sx={{ m: 1 }}>
                <Cards data={data} />
              </StyledGrid>
            );
          })}
      </StyledGrid>
    </div>
  );
};

export default HomePage;
