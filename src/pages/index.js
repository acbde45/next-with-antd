import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from 'antd';
import Layout from '../components/Layout';

export default function () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <Layout>
      <Card>
        Now we have {count} apples
        <ul>
          <li>
            <Link href="/a">
              <a>Page a</a>
            </Link>
          </li>
          <li>
            <Link href="/b">
              <a>Page b</a>
            </Link>
          </li>
        </ul>
      </Card>
    </Layout>
  );
}
