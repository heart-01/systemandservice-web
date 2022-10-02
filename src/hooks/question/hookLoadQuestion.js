import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

const INPUT_DEBOUNCING_TIME = 500;
const AUTO_COMPLETE_TRIGGER_LENGTH = 3;

export const useLoadQuestion = (props) => {
  const questionAll = useMemo(() => props.questionAll, [props.questionAll]);
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState(null);

  const loadQuestionListDebouncer = debounce((search) => props.loadQuestionAll(order, search), INPUT_DEBOUNCING_TIME);

  useEffect(() => {
    props.loadQuestionAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickMenuOrder = useCallback(
    (order) => {
      setOrder(order);
      props.loadQuestionAll(order, search);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.loadQuestionAll]
  );

  const handleOnLoadQuestionSearch = useCallback(
    (field) => (e) => {
      setSearch(e.target.value);
      if (field === "search" && e.target.value.length >= AUTO_COMPLETE_TRIGGER_LENGTH) {
        loadQuestionListDebouncer(e.target.value);
      } else if (field === "search" && e.target.value.length === 0) {
        props.loadQuestionAll();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadQuestionListDebouncer]
  );

  return { questionAll, handleOnClickMenuOrder, handleOnLoadQuestionSearch };
};