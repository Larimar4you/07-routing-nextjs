import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

export default function NotesFilterLayout({ children, sidebar, modal }: Props) {
  return (
    <section className={css.container}>
      <aside>{sidebar}</aside>
      <div>{children}</div>
      {modal}
    </section>
  );
}
