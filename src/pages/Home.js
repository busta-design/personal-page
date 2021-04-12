import { Container, Paper } from '@material-ui/core';
import styled from 'styled-components';
import BasicInformation from '../container/basicinformation';
import About from '../container/about';
import Works from '../container/works';
import Hobby from '../container/hobbies';
import Contact from '../container/contact';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

import Header from '../container/header';

const DivStyled = styled('div')`
  padding-top: 150px;
`;

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Header />
      <Container component={Paper}>
        <div id="information">
          <BasicInformation />
        </div>
        <DivStyled id="about" data-aos="slide-up">
          <About />
        </DivStyled>
        <DivStyled id="work" data-aos="flip-up">
          <Works />
        </DivStyled>
        <DivStyled id="hobbies" data-aos="fade-up">
          <Hobby />
        </DivStyled>
        <DivStyled id="contact" data-aos="zoom-in">
          <Contact />
        </DivStyled>
        <DivStyled></DivStyled>
      </Container>
    </>
  );
};

export default Home;
