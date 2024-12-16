import Link from "next/link";

export default function Home() {
  return (
    
    <main>
        <div>
          <h1>Hello World</h1>
          <Link href = "/users">Users</Link>
          <br />
          <Link href="/dynamicRoute">Dynamic Route</Link>
        </div>
    </main>
  );
}
