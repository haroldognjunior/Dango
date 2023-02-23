import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
};

const Seo = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
