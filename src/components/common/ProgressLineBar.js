import React from 'react';
import styled from 'styled-components';

const ProgressLineBar = ({ percent }) => {
  const BUCKET = process.env.REACT_APP_S3_URL;

  const StyledTrack = styled.div`
    position: relative;
    width: 100%;
    height: 0.5rem;
    background: ${(props) => props.theme.progress_bar.bg};
    margin: 1.5rem 0;
    border-radius: 1.8rem;
  `;

  const StyledThumb = styled.div`
    position: absolute;
    width: ${percent}%;
    height: 100%;
    background: ${(props) => props.theme.progress_bar.bar};
    border-radius: 1.8rem;
  `;

  const StyledIconTrack = styled.div`
    position: absolute;
    width: calc(100% - 3.2rem);
    height: 100%;
    left: 1.7rem;
    margin: 0 auto;
  `;

  const BaguetteIcon = styled.img.attrs({
    src: `${BUCKET}/icons/progress_baguette${
      percent === 100 ? '_complete' : ''
    }.svg`,
  })`
    position: absolute;
    top: -0.7rem;
    left: calc(-1.7rem + ${percent}%);
    filter: drop-shadow(0 0.4rem 0.9rem rgba(0, 0, 0, 0.4));
  `;

  return (
    <StyledTrack>
      <StyledThumb percent={percent} />
      <StyledIconTrack>
        <BaguetteIcon percent={percent} />
      </StyledIconTrack>
    </StyledTrack>
  );
};

export default ProgressLineBar;
