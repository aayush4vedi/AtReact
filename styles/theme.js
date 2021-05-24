import theme from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    // body: `Inter,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
};

// const GlobalStyle = ({ children }) => {
//     return (
//       <>
//         <CSSReset />
//         <Global
//           styles={css`
//             html {
//               min-width: 360px;
//               scroll-behavior: smooth;
//             }
//             #__next {
//               display: flex;
//               flex-direction: column;
//               min-height: 100vh;
//             }
//           `}
//         />
//         {children}
//       </>
//     );
//   };

export default extendTheme({ customTheme });
