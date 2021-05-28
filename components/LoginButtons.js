import { Button, Stack } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { GoogleIcon, GithubIcon } from '@/styles/icons';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Stack isInline>
      <Button
        onClick={() => auth.signinWithGitHub()}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        leftIcon={<GithubIcon/>}
        mt={0}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with GitHub
      </Button>
      <Button
        onClick={() => auth.signinWithGoogle()}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        leftIcon={<GoogleIcon/>}
        mt={0}
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with Google
      </Button>
    </Stack>
  );
};

export default LoginButtons;
