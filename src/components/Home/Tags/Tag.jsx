import { useDispatch, useSelector } from 'react-redux';
import {
  tagRemoved,
  tagSelected,
} from '../../../redux/features/filter/filterSlice';

export default function Tag({ name }) {
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const isSelected = tags.includes(name);

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(name));
    } else {
      dispatch(tagSelected(name));
    }
  };

  return (
    <button
      onClick={handleSelect}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
        ${
          isSelected
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white'
        }`}
    >
      {name}
    </button>
  );
}
