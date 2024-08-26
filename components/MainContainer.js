import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={"next,js,react " + keywords} />
        <title>Home page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Home" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: lightgreen;
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}

export default MainContainer