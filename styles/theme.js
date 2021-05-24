import theme from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';

const globalStyles = {
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        lineHeight: 'tall'
      },
      '#__next': {
        minH: '100vh'
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500'
      }
    })
  }
};

const customTheme = extendTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
    // body: 'Inter',
    body: `Inter,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c'
    }
  },
  icons: {
    ...theme.icons,
    logo: {
      path: (
        <path
          d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 46 32'
    }
  },
  globalStyles
});

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

export default customTheme;
