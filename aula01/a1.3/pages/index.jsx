import Link from 'next/link';

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <img src='/images/avatar.jpg' alt='Guilherme Taira' />
      <ul>
        <li>
          <Link href='/about'>Ir para sobre</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
