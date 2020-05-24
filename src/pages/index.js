import { useState, useEffect } from 'react';
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
      </Card>
    </Layout>
  );
}
