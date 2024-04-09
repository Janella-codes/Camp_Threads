import { fetchUser, fetchUsers, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import UserCard from "@/components/cards/UserCard";


async function Page() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    // Fetch users
    const result = await fetchUsers({
        userId: user.id,
        searchString: "",
        pageNumber: 1,
        pageSize: 25,
    })

    // getActivity 
    const activity = await getActivity(userInfo._id);


    return (
      <section>
          <h1 className="head-text mb-10">activity</h1>
          <section className="mt-10 flex flex-col gap-5">
            <div className="mt-14 flex flex-col gap-9">
                {result.users.length === 0 ? (
                    <p className="no-result">No users</p>
                ) : (
                    <>
                    {result.users.map((loser) => (
                        <UserCard
                            key={loser.id}
                            id={loser.id}
                            name={loser.name}
                            username={loser.username}
                            imgUrl={loser.image}
                            personType='User'    
                        />
                        ))}
                    </>
                )}
            </div>
            {activity.length > 0 ? (
              <>
                {activity.map((activity) => (
                  <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                    <article className="activity-card">
                      <Image
                        src={activity.author.image}
                        alt="profile image"
                        width={20}
                        height={20}
                        className="rounded-full object-cover"
                      />
                      <p className="!text-small-regular text-light-1">
                        <span className="mr-1 text-primary-500">
                          {activity.author.name}
                        </span>{" "}
                        replied to your thread
                      </p>
                    </article>
                  </Link>
                ))}
              </>
            ): <p className="!text-base-regular text-light-3">No activity</p>}
          </section>
      </section>
    )
  }
  
  export default Page