import { currentUser } from "@clerk/nextjs";



async function RightSidebar() {
  const user = await currentUser();
  if (!user) return null;



  return (
    <section className='custom-scrollbar rightsidebar'>
      <h1>right bar</h1>
    </section>
  );
}

export default RightSidebar;