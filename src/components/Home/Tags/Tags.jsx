import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../../redux/features/tags/tagsSlice';
import Tag from './Tag';

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags?.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  );
}
