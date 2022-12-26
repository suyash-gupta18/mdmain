import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "2jvr53rn",
    dataset:"production",
    useCdn:true,
    apiVersion:"2022-12-24",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;