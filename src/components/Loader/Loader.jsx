import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
  <div className={`${css.loader} ${css.centered} ${css.popup}`}>
    <Oval color="#F24E5E" height={70} width={70} />
  </div>
);

export default Loader;
