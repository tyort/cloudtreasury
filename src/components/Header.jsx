import Link from 'next/link';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Layout, Menu } from 'antd';
import { useRouter, withRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState(false);

  return (
    <Layout.Header style={{ background: '#fff' }}>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['stockValuation']}>
        <Menu.Item
          key="stockValuation"
          onClick={() => {
            router.push('/fairprice/calculate');
            setMenuItem('stockValuation');
          }}
          selected={menuItem === 'stockValuation'}>
          Расчёт справедливой стоимости
        </Menu.Item>
        <SubMenu key="exports" title="Отчёты">
          <Menu.Item
            key="stockValuationExport"
            onClick={() => setMenuItem('stockValuationExport')}
            selected={menuItem === 'stockValuationExport'}>
            <Link href="/fairprice/export" passHref>
              Определение стоимости ценных бумаг
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);
