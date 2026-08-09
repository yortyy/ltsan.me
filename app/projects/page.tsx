import Image from 'next/image';

export default function Page() {
  return <div>
    <div className='flex items-center justify-center'>
      <Image
        src="/temp-card.png"
        width={500}
        height={700}
        className="hidden md:block"
        alt="Temporary card image"
      />
    </div>
  </div>
}
