import Link from 'next/link';
import Layout from '@/components/Layout';
import { gbLen } from '@/utils/string';

export default function () {
  const text = '这算个什么事儿，你说是吧！';
  console.log(text, gbLen(text), text.length);

  return (
    <Layout>
      <Link href="/">
        <a>Back</a>
      </Link>
      <p>{text}</p>
    </Layout>
  );
}
