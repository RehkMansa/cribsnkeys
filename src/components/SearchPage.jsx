import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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

  .header {
    span {
      color: var(--gold);
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }

  .redirect {
    display: flex;
    gap: 10px;
    a {
      color: var(--gold);
    }
  }
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
  // const [agent, setAgent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchAll('cribs').then((res) => {
      const searchData = res.filter((response) => {
        const str = response.location.toLowerCase();
        let param = searchValues.location.toLowerCase();
        return str.includes(param);
      });

      setCribsArray(searchData);

      setShowLoader(false);
    });
  }, [searchValues]);
  return (
    <Section>
      {showLoader === false ? (
        <>
          {cribsArray.length >= 1 ? (
            <>
              <p className="header">
                Showing result for:{' '}
                <i>
                  <span>Location</span>: {searchValues.location},{' '}
                  <span>Days</span>: {searchValues.days}, <span>Guests</span>:{' '}
                  {searchValues.guests}
                </i>
              </p>
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
            </>
          ) : (
            <div className="redirect">
              <p>
                <i>No results found</i>
              </p>

              <Link to={'/cribs'}>View Available Cribs</Link>
            </div>
          )}
        </>
      ) : (
        <LoaderWrapper>
          <LoadGif />
        </LoaderWrapper>
      )}
    </Section>
  );
};

export default SearchPage;
