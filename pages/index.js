// 이런식으로 import는 컴포넌트에서 불가능하며, module에서만 가능
// _app.js에서 import 해야함
// import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      {/* global을 통해서 전역으로 지정 가능(단, 본 컴포넌트(page)에 국한함)
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style> */}
    </div>
  );
}
