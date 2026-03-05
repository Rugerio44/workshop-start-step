const likeStore : Map<string, number> = new Map();

export const getLikes = async (slug: string) : Promise<number> => {
    return likeStore.get(slug) ?? 0;
};

export const incrementLikes  = async (slug: string): Promise<number> => {
    const currentLikes = likeStore.get(slug) ?? 0;
    const update = currentLikes + 1;
    likeStore.set(slug, update);
    return update;
};