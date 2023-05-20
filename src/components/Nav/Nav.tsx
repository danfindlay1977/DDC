import Link from "next/link";

 const Nav = () => {
  return (
    <nav>
      <ul className="m-10 flex ">
        <li className="m-5">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="m-5">
          <Link href={"#"}>Creators</Link>
        </li>
        <li className="m-5">
          <Link href={"#"}>Buy</Link>
        </li>
        <li className="m-5">
          <Link href={"#"}>Shows</Link>
        </li>
        <li className="m-5">
          <Link href={"/upload"}>Upload</Link>
        </li>
      </ul>
    </nav>
  );
 };
export default Nav
