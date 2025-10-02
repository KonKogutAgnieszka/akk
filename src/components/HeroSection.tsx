import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="flex">
            <div>
        <p className="text-4xl">cześć, jestem</p>
                <div className={'flex'}>
                    <Image src={'/assets/images/logo.svg'} className={'rotate-90'} width={200} height={70} alt={'logo'}/>
                    <div>
        <h1 className="text-7xl">  Agnieszka <br />
            Koń-Kogut
            </h1>
        <p className="text-2xl">frontend developer</p>
                </div>
            </div>

        </div>
            <Image src={'/assets/images/photo_akk_no_back.png'}
                   width={300}
                   height={300}
                   alt={'portrait'}
                   draggable={false}
                   className="pointer-events-none select-none"/>
        </div>
    )
            }