import PostJobForm from '@/components/account/PostJobForm';
import { getCountries } from '@/data/getCountries';

async function PostJobPage() {
  const cities = await getCountries();

  return (
    <div className='w-full'>
      <PostJobForm cities={cities} />
    </div>
  );
}

export default PostJobPage;
