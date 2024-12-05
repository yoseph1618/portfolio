import { useEffect } from 'react';
import Content from './Content.jsx';

import { capitalizeFirstLetter } from './helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <Content>
        <Outlet />
      </Content>
    </section>
  );
}
export default Page;
