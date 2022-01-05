import styled from "styled-components";

export const FooterStyles = styled.footer`
  .footer {
    /* clip-path: ellipse(249% 100% at 57.96% 100%); */
    /* clip-path: ellipse(300% 100% at 205% 100%); */
    display: grid;
    grid-template-columns: 25% 25% 25% 25% 1fr;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.background};
    padding: var(--paddingLayout);
    padding-top: 4rem;
    /* padding-bottom: 2rem; */
  }

  @media only screen and (max-width: 1200px) {
    .footer {
      grid-template-columns: 40% 60%;
      align-items: center;
    }
  }

  @media only screen and (max-width: 960px) {
    .footer {
      grid-template-columns: 50% 50%;
    }
  }

  @media only screen and (max-width: 760px) {
    .footer {
      grid-template-columns: 100% !important;
    }
  }
  .footerMenu {
    color: ${({ theme }) => theme.text};
    padding-top: 1rem;
    li {
      list-style: none;
      /* color: var(--grey_2); */
      font-weight: 400;
      font-size: 1.5rem;
    }
    h4 {
      text-transform: uppercase;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.showcaseText};
    }
  }

  .social {
    background: ${({ theme }) => theme.background};
    padding-bottom: 1.5rem;
    ul {
      display: flex;
      justify-content: center;
      margin: 0rem;

      li {
        padding-right: 1rem;
        list-style: none;
      }
    }
  }

  .socialIcon:hover {
    fill: var(--light_1);
  }

  .copyright {
    padding-bottom: 0.5rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    text-align: center;
  }
  .message {
    padding-bottom: 0.2rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    text-align: center;
  }
  .copyright p {
    margin: 0;
    padding: 1rem;
    font-size: 1.2rem;
  }
  .copyright a {
    color: #fff;
  }

  .footerContact a {
    color: var(--grey_1);
  }

  .fade-in {
    animation: fadeInn 10s alternate infinite 30s;
  }
  .fade-out {
    animation: fadeOutt 10s alternate infinite 30s;
  }
  @keyframes fadeInn {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes fadeOutt {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
