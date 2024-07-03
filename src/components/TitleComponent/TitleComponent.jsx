import css from './TitleComponent.module.css';

export default function TitleComponent({ children }) {
  return <h1 className={css.title}>{children}</h1>;
}
