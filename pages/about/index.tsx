import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <h1>
      About Page
      <Link href="/">home</Link>
      <Link href="/about/mohtashim">moshi</Link>
    </h1>
  );
};
export default About;
