import { NextPage } from "next";
import Link from "next/link";

const Moshi: NextPage = () => {
  return (
    <h1>
      Moshi Page
      <Link href="/about">about</Link>
    </h1>
  );
};
export default Moshi;
