import Seo from "@/components/Seo";
import Head from "next/head";

// 컴포넌트명과 파일명은 관련이 없음
export default function Potato() {
  return (
    <div>
      <Seo title="about" />
      <h1>About</h1>
    </div>
  );
}
