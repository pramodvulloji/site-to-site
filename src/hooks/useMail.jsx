import { erp } from '@/store/erp/actions';

import { useSelector, useDispatch } from 'react-redux';

import { selectMailItem } from '@/store/erp/selectors';

export default function useMail({ entity }) {
  const { isLoading } = useSelector(selectMailItem);
  const dispatch = useDispatch();

  const send = (id) => {
    const jsonData = { id };
    dispatch(erp.mail({ entity, jsonData }));
  };

  return { send, isLoading };
}
