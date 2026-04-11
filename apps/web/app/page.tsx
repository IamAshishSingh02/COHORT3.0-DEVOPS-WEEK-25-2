import { prisma } from "@repo/db";

const home = async () => {
  const user = await prisma.user.findFirst()

  return (
    <div>
      name: {user?.name}
      <br />
      email: {user?.email}
    </div>
  )
}

export default home