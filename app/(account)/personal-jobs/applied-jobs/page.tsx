import NoJobCard from '@/components/my-jobs/NoJobCard';
import ApplyJobImage from '@/public/general/apply-job-image.svg';

export const metadata = {
  title: 'Applied Jobs',
};

async function AppliedJobsPage() {
  return (
    <div className='w-full'>
      <NoJobCard
        image={ApplyJobImage}
        title='No Applied Jobs'
        description='Start your job search now and be one of the first to apply for new opportunities.'
      />
    </div>
  );
}

export default AppliedJobsPage;
