import React from 'react';
import Category from './Category';
import ContentTableRow from './TableRow';

export default function ContentOverview() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category icon="ic-desktop" amount={18000500}>
                Game
                <br />
                Desktop
              </Category>
              <Category icon="ic-mobile" amount={18000500}>
                Game
                <br />
                Mobile
              </Category>
              <Category icon="ic-desktop" amount={18000500}>
                Other
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <ContentTableRow
                  title="Mobile Legends"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
                <ContentTableRow
                  title="Call of Duty"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Success"
                  image="overview-2"
                />
                <ContentTableRow
                  title="Clash of Clans"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Failed"
                  image="overview-3"
                />
                <ContentTableRow
                  title="The Royal Game"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Success"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
