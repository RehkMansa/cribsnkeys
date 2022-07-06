import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchAll } from './firebase/utils';
import LoadGif from './LoadGif';
import SingleCrib from './SingleCrib';

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 5%;
  position: relative;
  overflow: scroll;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
`;

const Content = styled.div`
  display: flex;
  gap: 0px 50px;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  & > * {
    width: calc(50% - 50px);
  }
`;

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [cribsArray, setCribsArray] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [searchValues] = useState(Object.fromEntries([...searchParams]));

  const navigate = useNavigate();

  useEffect(() => {
    fetchAll('cribs').then((res) => {
      setCribsArray(res);

      setShowLoader(false);
    });
  }, []);
  return (
    <Section>
      {cribsArray.length >= 1 && showLoader === false ? (
        <Content>
          {cribsArray.map((cribs, n) => (
            <SingleCrib
              key={n}
              title={cribs.title}
              imgURL={cribs.image}
              agent={cribs.agent}
              location={cribs.location}
              price={cribs.price}
              desc={cribs.desc}
              amenities={cribs.amenities}
              func={(e) => {
                navigate(`/cribs/${cribs.snapID}`, { state: cribs });
              }}
            />
          ))}
        </Content>
      ) : (
        <LoaderWrapper>
          <LoadGif />
        </LoaderWrapper>
      )}
    </Section>
  );
};

export default SearchPage;
