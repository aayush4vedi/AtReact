import Head from 'next/head';
import { Button, Text, Heading, Code, Icon, Flex, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon } from '../styles/icons';

const Home = () => {
  //use auth hook created
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        {/* impp */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
        <title>Fast Feedback</title>
      </Head>

      <Icon as={FastFeedbackIcon} w={12} h={12} color="black" mb={2} />

      {/* NOTE: hack to avoid auth*/}
      <Button as="a" href="/dashboard_hack">
        View Dashboard(Hack)
      </Button>

      {auth.user ? (
        <Button as="a" href="/dashboard">
          View Dashboard
        </Button>  
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
