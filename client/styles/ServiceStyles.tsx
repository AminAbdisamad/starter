import styled from "styled-components";

export const ServiceStyles = styled.div`
  background: var(--light_1_1);
  padding: var(--paddingLayout);
  padding-bottom: 4rem;
  padding-top: 4rem;

  .btn {
    background: transparent;
    border: 1px solid var(--secondaryColor);
    color: var(--secondaryColor);
    padding-top: 1.1rem;
    padding-bottom: 1.1rem;
    margin-top: 2rem;
  }

  .cardbox {
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 4rem;
    margin-bottom: 2rem;
  }
  .card {
    background: ${({ theme }) => theme.background};
    border-radius: var(--borderRadius);
    display: grid;
    grid-template-columns: 30% 70% 1fr;
    /* border: 1px solid var(--secondaryColor); */
  }
  .cardRight {
    padding: 2rem 1.2rem;
  }

  .card h2 {
    color: var(--light_3);
    font-weight: 300;
  }
  .card span {
    /* color: ${({ theme }) => theme.text}; */
    color: var(--secondaryColor);
    font-weight: 700;
  }
  .cardLeft {
    /* background: linear-gradient(
      0deg,
      rgba(11, 88, 142, 0.9),
      rgba(84, 138, 196, 0.2)
    ),
    url('/assets/software.jpeg'); */

    background: linear-gradient(0deg, rgb(3, 37, 108), rgba(237, 29, 127));
    /* background: var(--primaryColor); */
    background-size: cover;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .service_icon {
    color: var(--light_1);
    width: 50%;
  }
  .cardLeft span {
    width: 100%;
    font-size: 4rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .card:hover {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    transition: all 600ms ease-in-out;
  }

  /* Mobile Responsive  */
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 960px) {
  }
  @media only screen and (max-width: 860px) {
    .cardbox {
      grid-template-columns: 100% !important;
    }
  }
  @media only screen and (max-width: 768px) {
    /* Responsive */
  }
  @media only screen and (max-width: 560px) {
    .cardLeft {
      display: none;
    }
    .card {
      grid-template-columns: 100%;
    }
  }
`;
