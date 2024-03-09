import Image from "next/image";
import '../firebase'

export default function Home() {
  // インラインスタイル
  const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const descriptionStyle = {
    textAlign: 'center',
    maxWidth: '800px',
  };

  const codeStyle = {
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily: 'Source Code Pro, monospace',
  };

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '3rem',
  };

  const cardStyle = {
    margin: '1rem',
    flexBasis: '45%',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
  };

  return (
    <main style={mainStyle}>
      <div style={descriptionStyle}>
        <p>
          ようこそ！&nbsp;
          <code style={codeStyle}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By,{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div style={centerStyle}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div style={gridStyle}>
        {/* 各カードにcardStyleを適用 */}
        <a
          href="https://nextjs.org/docs"
          style={cardStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>資料 -&gt;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          style={cardStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>学び -&gt;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js"
          style={cardStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>テンプレ -&gt;</h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new"
          style={cardStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>開発 -&gt;</h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
