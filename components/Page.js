import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
  const title = `At React – ${name}`;
  const url = `https://atreact.io${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  );
};

export default Page;
