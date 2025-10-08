import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={"flex justify-center mt-16"}>
      <div className={"flex flex-col justify-center mr-20"}>
        <p className="text-4xl">cześć, jestem</p>

        <div className={"flex mt-10"}>
          <Image
            src={"/assets/images/logo_pion.svg"}
            className={"block"}
            width={70}
            height={200}
            alt={"logo"}
          />
          <div className={"flex flex-col justify-between h-full ml-10"}>
            <h1 className="text-7xl">
              {" "}
              Agnieszka <br />
              Koń-Kogut
            </h1>
            <p className="text-2xl flex-end">frontend developer</p>
          </div>
        </div>
        <Link href="/contact">poznajmy się</Link>
      </div>
      <Image
        src={"/assets/images/photo_akk_no_back.png"}
        width={320}
        height={320}
        alt={"portrait"}
        draggable={false}
        className="pointer-events-none select-none"
      />
    </div>
  );
}
