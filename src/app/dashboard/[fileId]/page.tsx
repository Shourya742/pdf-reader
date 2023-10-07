import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface PageProps {
  params: {
    fileId: string;
  };
}
const page = ({ params }: PageProps) => {
  const { fileId } = params;
  const { getUser } = getKindeServerSession();
  const user = getUser();
  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileId}`);
  return <div>{fileId}</div>;
};

export default page;
