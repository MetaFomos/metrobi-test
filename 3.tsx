import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  background-color: #00bcd4;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Sidebar = styled.div`
  background-color: #e1bee7;
  padding: 16px;
  flex-basis: 200px;
`;

const MainContent = styled.div`
  background-color: #fff176;
  padding: 16px;
  flex-grow: 1;
`;

const ExtraContent = styled.div`
  background-color: #9e9e9e;
  padding: 16px;
  flex-basis: 200px;
`;

const RelatedImages = styled.div`
  background-color: #4caf50;
  padding: 16px;
  flex-basis: 100%;
`;

const Footer = styled.div`
  background-color: #ff9800;
  padding: 16px;
`;

const App = () => {
  return (
    <Container>
      <Header>Header</Header>
      <Content>
        <Sidebar>Sidebar</Sidebar>
        <MainContent>Main Content</MainContent>
        <ExtraContent>Extra Content</ExtraContent>
      </Content>
      <RelatedImages>Related Images</RelatedImages>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default App;
