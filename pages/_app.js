import NavBar from "@/components/NavBar";
import "../styles/globals.css"

// 2개의 Props를 사용
// Component: 페이지들
// pageProps: 각 페이지들의 props
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>

      {/* global을 통해서 전역으로 지정 가능(단, 본 컴포넌트(page)에 국한함) */}
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
