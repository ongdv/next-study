import Head from "next/head";

export default function Seo({ title = "Home" }) {
  return (
    <Head>
      <title>{title} | Next Moivies</title>
    </Head>
  );
}
