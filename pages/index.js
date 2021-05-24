import Head from 'next/head';
import { Button, Text, Heading, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  //use auth hook created
  const auth = useAuth();

  return (
    <div className="container">
      <Head>
        <title>At React</title>
      </Head>

      <main>
        <Heading fontWeight="medium">AtReact!</Heading> 

        {/* //this '?.' is kind of ternary opertor provided by NextJS */}
        <Text>
          Current user: <Code> {auth.user ? auth.user.email : 'None'} </Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
