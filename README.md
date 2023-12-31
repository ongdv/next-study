# NextJS Study

## 1. Create-Next-App

`create-react-app`과 같이 `create-next-app`으로 프로젝트 생성이 가능하다.

```shell
npx create-next-app@latest
```

## CSR과 SSR

CSR의 경우, React에서 HTML을 로드할 때, `<div>` 태그 하나만 가지고 오며, JS 파일을 불러와서 렌더링하게 되는데, 이는 네트워크 상태가 좋지않은 곳에서는 사용자들이 대기하는 시간이 길어짐


pre-render : 컴포넌트의 초기상태를 기반으로 미리 렌더링된 html을 클라이언트로 넘김 => 페이지의 초기 로딩 지연을 줄일 수 있음!
hydration : pre-render된 페이지에 react의 반응성을 입히는 것

## Router
Router의 경우, pages 폴더의 컴포넌트 하나 하나가 페이지가 되며, 각 페이지 별로 컴포넌트를 서로 공유하지 않음

## Styels
next의 컴포넌트에서는 css파일과 같은 정적 파일을 import할 수 없음

만약 제공하려면 css의 경우 .module 파일을 제공해야함

```css
 /* style jsx를 통해서 파일 내부에서 스타일 지정 가능 */
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
```
또한, 컴포넌트끼리 공유하지 않기 때문에, 전역 설정을 하기 위해서는 global을 사용해야함

```css
    {/* global을 통해서 전역으로 지정 가능(단, 본 컴포넌트(page)에 국한함) */}
    <style jsx global>
    {`
        a {
        color: white;
        }
    `}
    </style>
```

## _app
Next에서는 Entry 포인트로 _app 컴포넌트를 지원한다.

_app 컴포넌트에서는 2개의 Props를 사용하는데, 1)Component: 페이지들, 2)pageProps: 각 페이지들의 props이다.
