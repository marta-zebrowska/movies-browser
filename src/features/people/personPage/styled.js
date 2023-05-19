import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`;

export const PersonTile = styled.div`
  display: flex;
  flex-direction: column;
  height: 405px;
  width: 208px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.heather};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    transition: 1s ease-out 0s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100%;
    height: auto;
    padding: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 136px;
    height: 245px;
    padding: 8px;
  }
`;

export const PersonImage = styled.img`
  width: 100%;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  aspect-ratio: 2/3;
  object-fit: cover;
  background-size: 30%;

  &.no-picture {
    object-fit: cover;
  }
`;

export const FullName = styled.h2`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 29px;
  text-align: center;
  padding: 12px 0 8px 0;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FunctionName = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
