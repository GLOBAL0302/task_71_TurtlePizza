import { useAppDispatch } from '../../app/hooks.ts';
import { fetchOrdersThunk } from '../../components/Order/orderThunk.ts';
import { useCallback, useEffect } from 'react';

const Orders = () => {
  const dispatch = useAppDispatch();

  const fetchOrders = useCallback(async () => {
    await dispatch(fetchOrdersThunk());
  }, []);

  useEffect(() => {
    void fetchOrders();
  }, [dispatch]);

  return <></>;
};

export default Orders;
