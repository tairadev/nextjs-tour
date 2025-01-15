import Link from 'next/link'; // Import correto
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Página de Post {router.query.id}!
      <ul>
        <li>
          <Link href='/'>Ir para a home</Link>
        </li>
      </ul>
    </div>
  );
}
