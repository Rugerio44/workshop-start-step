import { defineAction } from "astro:actions";
import { incrementLikes, getLikes} from "./repository";
import type { LikesResponse } from "./model";

export const server = {
  incrementLikes: defineAction<LikesResponse>({
    async handler({ slug }) {
      return { likes: await incrementLikes(slug) };
    },
  }),
  getlikes: defineAction<LikesResponse>({
    async handler({ slug }) {
      return { likes: await getLikes(slug) };
    },
  }),
};
