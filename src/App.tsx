import React, { useEffect, useRef } from 'react';

import type { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';

import { Table } from 'components/DataGrid/Table';
import styled from 'styled-components';
import { columns, rows } from 'mocks/testData/TableData';

export const App = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sub1: Subscription;

    if (ref.current) {
      const sequence$ = fromEvent<MouseEvent>(ref.current, 'click');

      sub1 = sequence$.subscribe({
        next: (v) => {
          console.log('FirstListener', v.clientX, v.clientY);
        },
      });
    }

    return (): void => {
      console.log('AppEffect cleanup');
      sub1.unsubscribe();
    };
  }, []);

  const Container = styled.div`
    padding: 24px;
    box-shadow: 0 4px 8px rgba(138, 150, 168, 0.4), 0px -2px 4px rgba(138, 150, 168, 0.08);
    border-radius: 8px;
    background: #fff;
    display: flex;
    width: fit-content;
    margin: 20px;
  `;

  return (
    <>
      <div ref={ref} className="s">
        <h1>
          React Ts App Comp - {process.env.NODE_ENV} {process.env.name}
        </h1>
      </div>
      <div className="s">No click</div>
      <Container>
        <Table rows={rows} columns={columns} pageSize={5} canHideColumns pagination />
      </Container>
    </>
  );
};
