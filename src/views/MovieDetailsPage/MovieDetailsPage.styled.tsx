import styled from "styled-components";

export const MovieWrapper = styled.div`
  padding: 20px 5px;
`;

export const BackBtn = styled.button`
  margin-bottom: 10px;
`;

export const Card = styled.div`
  display: flex;
  gap: 15px;
`;

const Heading = styled.h3`
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const MovieHeading = styled.h2`
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Overview = styled(Heading)``;
export const GenreDesc = styled(Heading)``;
