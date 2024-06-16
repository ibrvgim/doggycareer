import PostJobForm from '@/components/account/post-job/PostJobForm';
import { getCountries } from '@/data/getCountries';

export const metadata = {
  title: 'Post a Job',
};

async function PostJobPage() {
  const cities = await getCountries();

  return (
    <div className='w-full'>
      <PostJobForm cities={cities} />
    </div>
  );
}

export default PostJobPage;
