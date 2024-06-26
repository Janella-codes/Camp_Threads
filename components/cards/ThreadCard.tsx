import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
    id: string;
    currentUserId: string;
    parentId: string | null;
    content: string;
    author: {
        name: string;
        image: string;
        id: string;
     
    childItem: {
        id: string;
        name: string;
        image: string;
        createdAt: string;
    }
    }
    community: {
        id: string;
        name: string;
        image: string;
    } | null;
    createdAt: string;
    comments: {
        author: {
            id: string;
            image: string;
            name: string;
            createdAt: string;
        }
    comments: {
        createdAt: string;
        id: string;
        author: {
            id: string;
            name: string;
            image: string;
            }
        }   
    }[]
    isComment?: boolean;
}



const ThreadCard = ({
    id,
    currentUserId,
    parentId,
    content,
    author,
    community,
    createdAt,
    comments,
    isComment,
    }: Props) => {
    return (
        <article className={`flex w-full flex-col rounded-xl ${isComment ? "px-0 xs:px-7" : "bg-sky-400 p-7"}`}>
            <div className="flex items-start justify-between">
                <div className="flex w-full flex-1 flex-row gap-4">
                            <div className="flex flex-col items-center">
                            <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
                            <Image
                                src={author.image}
                                alt='user_community_image'
                                fill
                                className='cursor-pointer rounded-full'
                                />
                            </Link>
                            <div className='thread-card_bar' />
                        </div>
                    <div className='flex w-full flex-col'>
                        <Link href={`/profile/${author.id}`} className='w-fit'>
                        <h4 className='cursor-pointer text-base-semibold text-light-1'>
                            {author.name}
                        </h4>
                        </Link>
                        <p className='mt-2 text-small-regular text-light-2'>{content}</p>
                        <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
                            <div className='flex gap-3.5'>
                                <Image
                                src='/assets/heart-gray.svg'
                                alt='heart'
                                width={24}
                                height={24}
                                className='cursor-pointer object-contain'
                                />
                                <Link href={`/thread/${id}`}>
                                <Image
                                    src='/assets/reply.svg'
                                    alt='heart'
                                    width={24}
                                    height={24}
                                    className='cursor-pointer object-contain'
                                />
                                </Link>
                                <Image
                                src='/assets/repost.svg'
                                alt='heart'
                                width={24}
                                height={24}
                                className='cursor-pointer object-contain'
                                />
                                <Image
                                src='/assets/share.svg'
                                alt='heart'
                                width={24}
                                height={24}
                                className='cursor-pointer object-contain'
                                />
                            </div>
                            {isComment && comments.length > 0 && (
                                <Link href={`/thread/${id}`}>
                                <p className='mt-1 text-subtle-medium text-gray-1'>
                                {formatDateString(createdAt)}
                                    {comments.length} repl{comments.length > 1 ? "ies" : "y"}
                                </p>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* delete thread */}
                {/* show comment logos */}

            </div>   
                {!isComment && community && (
                    <Link href={`/communities/${community.id}`} className="mt-5 flex items-center">
                        <p className="text-subtle-medium text-light-1">
                            {formatDateString(createdAt)}
                         {" "} - {community.name} Community
                        </p>
                        <Image
                            src={community.image}
                            alt={community.name}
                            width={20}
                            height={20}
                            className="cursor-pointer object-contain"
                        />
                    </Link>
                )}

                    {!isComment && comments.length > 0 && (
                                <Link href={`/thread/${id}`} className="mt-5 flex items-center">
                               <p className="text-subtle-medium text-light-1">
                        
                         {" "} - {author.name} commented on this
                        </p>
                        <Image
                            src={author.image}
                            alt={author.name}
                            width={20}
                            height={20}
                            className="cursor-pointer object-contain"
                        />
                                </Link>
                            )}

            {/*{!isComment && comments.length > 0 && (
                    <Link href={`/thread/${author.childItem.id}`} className="mt-5 flex items-center">
                        <p className="text-subtle-medium text-light-1">
                            {formatDateString(createdAt)}
                         {" "} - {author.childItem.name} commented on this
                        </p>
                        <Image
                            src={author.childItem.image}
                            alt={author.childItem.name}
                            width={20}
                            height={20}
                            className="cursor-pointer object-contain"
                        />
                    </Link>
                )} */}
          
    </article>
    );
}

export default ThreadCard;