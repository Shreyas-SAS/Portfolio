
// http helper function!
export const get=async (url) => {
    return (await (await fetch(url)).json());
};
