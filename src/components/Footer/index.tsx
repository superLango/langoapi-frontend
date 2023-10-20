import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'Lango 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'beian',
          title: <>甘公网安备 62092202000136号</>,
          href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62092202000136',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/superLango',
          blankTarget: true,
        },
        {
          key: '备案号',
          title: <>陇ICP备2023001048号-1</>,
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
