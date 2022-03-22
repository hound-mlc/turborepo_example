import { Button } from "ui";

export default function Users() {
  return (
    <div>
      <h1>{process.env.NEXT_PUBLIC_TEST_ENV}</h1>
      <Button />
    </div>
  );
}
