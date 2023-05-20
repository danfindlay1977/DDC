import { NextPage } from "next";

const Player: NextPage =  () => {
    return (
      <section className=" h-screen flex flex-col ">
        <section className="h-4/5 w-screen bg-slate-500 ">
          <h1>Player</h1>
            </section>
            <section className="h-1/5 bg-slate-300">
          <h1>List Player</h1>
            <section className="flex w-screen justify-between"></section>
            </section>
      </section>
    );
}
export default Player