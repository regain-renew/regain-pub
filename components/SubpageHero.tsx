import Link from "next/link";

type SubpageHeroProps = {
  title: string;
  body: string;
};

export function SubpageHero({ title, body }: SubpageHeroProps) {
  return (
    <main className="subpage">
      <div className="shell subpage__inner">
        <p className="subpage__eyebrow">PREPARED FOR EXPANSION</p>
        <h1>{title}</h1>
        <p>{body}</p>
        <Link href="/" className="button button--secondary">
          HOME으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
