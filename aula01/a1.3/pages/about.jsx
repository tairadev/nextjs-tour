import Link from 'next/link';

function About() {
  return (
    <div>
      About Page
      <ul>
        <li>
          <Link href='/'>Ir para home</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
