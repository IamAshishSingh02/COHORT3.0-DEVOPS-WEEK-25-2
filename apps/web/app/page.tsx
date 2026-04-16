import { prisma } from "@repo/db";

export const dynamic = "force-dynamic";

const Home = async () => {
  try {
    const user = await prisma.user.findFirst();

    return (
      <div>
        name: {user?.name}
        <br />
        email: {user?.email}
      </div>
    );
  } catch (error) {
    console.error("Failed to load user on the home page:", error);

    return <div>Unable to load user data right now.</div>;
  }
};

export default Home;
