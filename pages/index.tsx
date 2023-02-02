import Head from "next/head";
import Image from "next/image";
import Description from "../components/Description";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className="w-full h-full mx-auto mb-0 bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]">
      <NavBar />
      <Description />
    </main>
  );
}
