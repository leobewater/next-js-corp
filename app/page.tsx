import Image from 'next/image';

export default function Home() {
  return (
    <div className='absolute -z-10 inset-0'>
      Home page
      <Image src='/images/home.jpg' alt='car factory' fill objectFit='cover' />
    </div>
  );
}
