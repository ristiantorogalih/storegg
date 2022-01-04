import React from 'react';
import MemberProfile from './Profile';
import SidebarFooter from './SidebarFooter';
import SidebarMenuItem from './SidebarMenuItem';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <MemberProfile />
        <div className="menus">
          <SidebarMenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <SidebarMenuItem
            title="Transaction"
            icon="ic-menu-transaction"
            href="/member/transactions"
            active={activeMenu === 'transactions'}
          />
          <SidebarMenuItem
            title="Message"
            icon="ic-menu-message"
            href="/member"
          />
          <SidebarMenuItem title="Card" icon="ic-menu-card" href="/member" />
          <SidebarMenuItem
            title="Rewards"
            icon="ic-menu-reward"
            href="/member"
          />
          <SidebarMenuItem
            title="Settings"
            icon="ic-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <SidebarMenuItem
            title="Logout"
            icon="ic-menu-logout"
            href="/sign-in"
          />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
