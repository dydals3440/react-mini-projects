import SliderComponent from './SliderComponent';
import { Title } from '../components/Title';

export default function SliderApp() {
  return (
    <div className='text-center container'>
      <Title text={'slide to grow'} />
      <SliderComponent />
    </div>
  );
}
