import NoJobCard from '@/components/my-jobs/NoJobCard';
import SaveJobImage from '@/public/general/save-job-image.svg';

export const metadata = {
  title: 'Saved Jobs',
};

function SavedJobsPage() {
  return (
    <div className='w-full'>
      <NoJobCard
        image={SaveJobImage}
        title='No Saved Jobs'
        description='Discover new opportunities and save jobs that match your criteria for future review.'
      />
    </div>
  );
}

export default SavedJobsPage;
