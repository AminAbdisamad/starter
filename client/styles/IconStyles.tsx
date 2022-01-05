import styled from "styled-components";

import {
  TwitterWithCircle,
  FacebookWithCircle,
  GithubWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social/";

export const TwitterIcon = styled(TwitterWithCircle)`
  color: red;
  /* &:hover {
    filter: brightness(0.5);
  } */
`;

export const GithubIcon = styled(GithubWithCircle)`
  color: ${({ theme }) => theme.text};
  size: "45";
  &:hover {
    filter: brightness(0.5);
  }
`;

export const Instagram = styled(InstagramWithCircle)`
  color: ${({ theme }) => theme.text};
  size: "45";
  &:hover {
    filter: brightness(0.5);
  }
`;
export const FacebookIcon = styled(FacebookWithCircle)`
  color: ${({ theme }) => theme.text};
  size: "45";
  &:hover {
    filter: brightness(0.5);
  }
`;
