import styled from "styled-components";
import Section from "../components/Section";
import TestAPI from "../components/TestAPI";

const HomeRoot = styled.div`
  display: block;
`;
const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 30rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeRoot>
      <HomeContainer>
        <Section title="Home">
          <h1>
            Home
          </h1>
        </Section>
        <TestAPI/>
      </HomeContainer>
    </HomeRoot>
  );
}

export default Home;
