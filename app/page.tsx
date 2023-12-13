import { MyClientComponent } from 'components/my-client-component';
import { MyServerComponent } from 'components/my-server-component';

export default function Home() {
  return (
    <div className='container p-4 mx-auto'>
      <div className='space-y-8'>
        <MyServerComponent />
        <MyClientComponent />
      </div>
    </div>
  );
}
