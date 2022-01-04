import React from 'react';
import Sidebar from '../../../components/organisms/Sidebar/Sidebar';
import TransactionsContent from '../../../components/organisms/TransactionContent/TransactionContent';

export default function index() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsContent />
      </section>
    </>
  );
}
