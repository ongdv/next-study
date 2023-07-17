import Head from "next/head";

export default function Seo({ title }) {
  const titleMessage = `${title} | Next Moivies`
  return (
    <Head>
      <title>{titleMessage}</title>
    </Head>
  );
}
