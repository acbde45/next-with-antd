import Link from 'next/link';
import Layout from '@/components/Layout';

export default function () {
  return (
    <Layout>
      <Link href="/">
        <a>Back</a>
      </Link>
    </Layout>
  );
}
