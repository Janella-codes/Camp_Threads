import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import Link from "next/link";
import { redirect } from "next/navigation";





async function Page() {
    const user = await currentUser();
    
    if (!user) return null; // to avoid typescript warnings

    const userInfo = await fetchUser(user.id);



    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user?.username,
        name: userInfo ? userInfo?.name : user?.firstName || "",
        bio: userInfo ? userInfo.bio : "",
        image: userInfo ? userInfo?.image : user?.imageUrl,
    }


    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
        <Link className="head-text" href={"/"}>Home</Link>
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Complete your profile now to use Camp Threads</p>

            <section className="mt-9 bg-cyan-900 p-10">
            <AccountProfile 
                    user={userData}
                    btnTitle="Continue"
                    />
            </section>
        </main>
    )
}

export default Page

