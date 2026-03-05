import React, { useState, useEffect } from 'react';
import { actions } from 'astro:actions';

interface Props {
    slug: string;
}

export const LikeButton : React.FC<Props> = ({ slug }) => {
    const [likes, setlikes] = useState<number>(0);

    useEffect(() =>{
        actions.getlikes(slug).then(response => {
            setlikes(response?.data?.likes ?? 0);
        });
    }, []); 

    const handlelike = () =>{
        const newlikes = likes + 1;
        setlikes (newlikes);
        actions.incrementLikes({ slug });
    }

    return (
      <div className="item-center flex">
        <button
          type="button"
          className="group w-fit cursor-pointer rounded-full"
          aria-label="Like"
          title="Like This post"
          onClick={handlelike}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="1em"
            height="1em"
            className="w-6 h-6 transition-transform group-hover:scale-110"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <span className="ml-2 text-base pt-0.5">{likes}</span>
      </div>
    );
}

export default LikeButton;
