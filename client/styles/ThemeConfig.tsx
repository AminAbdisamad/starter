import { createGlobalStyle } from "styled-components";

import { StyleProps } from "../components/TypeDefinations";
export const darkTheme = {
  body: "#102338",
  text: "#FAFAFA",
  toggleBorder: "#45526c",
  background: "#0c1e32",
  showcaseText: "#ED1D7F",
};
export const lightTheme = {
  body: "#ecf0f3",
  text: "#6b6374",
  toggleBorder: "#828282",
  background: "#fff",
  showcaseText: "#03256C",
};

export const GlobalStyles = createGlobalStyle<StyleProps>`

html {
  
    --mainColor:#0c1e32;
    --primaryColor: #03256C;
    --primaryColorDark: #011f5e;
    --secondaryColor : #ED1D7F;
    --black: #000000;
    --grey:#AAAAAA;
    --maxWidth:1200px;
    --bs: 'box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1)';
    --dark-color: #29313e;
    --darker-color: #131b25;
    --light_1: #fbfbfd;
    --light_2: #e9ecef;
    --light_3: #828282;
    --grey_1: #d4d1d1;
    --grey_2: #45526c;
    --grey_3: #333;
    --menu-font-size: 1.2rem;
    --paddingLayout:0 15rem;
    --borderRadius: 7px;
    box-sizing: border-box;
    font-size: 62.5%;
    padding:0;
    margin:0;
  
 
    @media(max-width:1200px){
      --paddingLayout:0 5rem;
    }
    @media(max-width:1024px){
      --paddingLayout:0 2rem;
    }
    @media(max-width:350){
      --paddingLayout:0 1rem;
    }
}
*,*:after, *:before {
    box-sizing: inherit;
    padding:0;
    margin:0;
    
}
body {
  background:${(props) => props.theme.body};
  color:${(props) => props.theme.text};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.5rem;
  line-height: 2;
  /* max-width: 1400px; */
  
}

a {
    text-decoration: none;
    color:var(---grey_2);
    &:hover {
    filter: brightness(-0.5);
  }
}

h1 {
  color:${({ theme }) => theme.text};
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    margin: 1rem;
}
p{
  margin-bottom:1rem;
}
.btn {
    border: none;
    /* margin: 2.5rem 0rem; */
    padding: 1.2rem 4rem;
    border-radius: 6rem;
    font-size: 2rem;

    margin-top:2rem;
    border: 1px solid var(--secondaryColor);
    background-color: var(--secondaryColor);
    color: var(--light_1) ;
    &:hover {
      color: var(--light_2);
      background: transparent;
      
    }
  
}`;
