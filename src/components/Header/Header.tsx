import Nav from "../Nav/Nav";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const {data: sessionData} = useSession()
    return (
      <header className=" flex w-full justify-between bg-transparent text-white">
        <h1 className="m-10 tracking-widest">DDC</h1>
            <Nav />
            <button className="bg-black rounded-xl  " onClick={sessionData ? () => void signOut() : () => void signIn()}>{ sessionData ? "Sign out" : "Sign in" }</button>
      </header>
    );
}
export default Header