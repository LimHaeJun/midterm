import { useRouter } from "next/router";

export default function posts() {
  const router = useRouter();
  const { pid } = router.query;
  return <>Post: {pid}</>;
}
