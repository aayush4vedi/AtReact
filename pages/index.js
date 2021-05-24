import Head from 'next/head';
import { Button, Text, Heading, Code, Icon, Flex } from '@chakra-ui/react';

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
    >
      <Head>
        <title>At React</title>
      </Head>

      {/* <Heading>AtReact!</Heading> */}
      <Icon as={FastFeedbackIcon} w={12} h={12} color="black" />

      {/* //this '?.' is kind of ternary opertor provided by NextJS */}
      {/* <Text>
        Current user: <Code> {auth.user ? auth.user.email : 'None'} </Code>
      </Text> */}

      {auth.user ? (
        <Button onClick={(e) => auth.signout()} mt={4} size="sm">Sign Out</Button>
      ) : (
        <Button onClick={(e) => auth.signinWithGitHub()} mt={4} size="sm">Sign In</Button>
      )}
    </Flex>
  );
};

export default Home;
