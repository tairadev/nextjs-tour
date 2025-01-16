import Link from 'next/link';

export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={true}>
          <a>Sobre</a>
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          <a>Link Prefetch</a>
        </Link>
      </li>
    </div>
  );
}
