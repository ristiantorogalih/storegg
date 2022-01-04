import React from 'react';
import ContentOverview from '../../components/organisms/ContentOverview/ContentOverview';
import Sidebar from '../../components/organisms/Sidebar/Sidebar';

export default function index() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <ContentOverview />
    </section>
  );
}
