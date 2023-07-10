import "../styles/globals.css"
import Layout from "@/components/Layout";

// 2개의 Props를 사용
// Component: 페이지들
// pageProps: 각 페이지들의 props
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      <span>Hello</span>
    </Layout>
  );
}
