import { prisma } from "@repo/db";

const home = async () => {
  const user = await prisma.user.findFirst()

  return (
    <div>
      {user?.name}
      {user?.name}
    </div>
  )
}

export default home