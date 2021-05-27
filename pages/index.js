import Head from 'next/head';
import { Box, Button, Flex, Text, Icon, Link, Stack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { FastFeedbackIcon, GithubIcon, GoogleIcon } from '../styles/icons';

const Home = () => {
  //use auth hook created
  const auth = useAuth();

  return (
    <Box bg="gray.100">
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
          <Button
            as="a"
            href="/dashboard"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            mt={4}
            size="lg"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            View Dashboard
          </Button>
        ) : (
          <Stack>
            <Button
              onClick={(e) => auth.signinWithGitHub()}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              leftIcon={<GithubIcon/>}
              mt={4}
              size="lg"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              Sign In with GitHub
            </Button>
            <Button
              onClick={(e) => auth.signinWithGoogle()}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              leftIcon={<GoogleIcon/>}
              mt={4}
              size="lg"
              _hover={{ bg: 'gray.100' }}
              _active={{
                bg: 'gray.100',
                transform: 'scale(0.95)'
              }}
            >
              Sign In with Google
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Home;
