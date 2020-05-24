import Link from 'next/link';
import Layout from '@/components/Layout';

export default function () {
  const text = '这算个什么事儿，你说是吧！';

  return (
    <Layout>
      <Link href="/">
        <a>Back</a>
      </Link>
      <p>{text}</p>
    </Layout>
  );
}
