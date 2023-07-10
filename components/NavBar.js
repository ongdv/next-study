import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav >
      {/* Link 태그 안에서 a 태그를 사용하는 것은 이미 지원 중단되었으며, legacyBehavior를 통해서 사용 가능함 */}
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* style jsx를 통해서 파일 내부에서 스타일 지정 가능 */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a{
          text-decoration: none;
        }
        .active{
            color: yellow;
        }
      `}</style>
    </nav>
  );
}
