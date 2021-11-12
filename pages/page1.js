import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import Escena from "../components/escena";
import { Script } from "vm";
var ruta = "data/perropanson.json";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3004/data/EDINFO.json");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Page1({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Tour Edificio Informática</title>
      </Head>
      <Escena escenas={data}></Escena>
    </div>
  );
}
