import CertifiedMints from "@/components/certifiedmints";
import FAQ from "@/components/faq";
import Landing from "@/components/landing";
import MintCountDown from "@/components/mintcountdown";
import Mints from "@/components/mints";
import Spin from "@/components/spin";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Landing />
      <MintCountDown />
      <Mints />
      <CertifiedMints />
      <FAQ />
      <Spin />
    </main>
  );
}
