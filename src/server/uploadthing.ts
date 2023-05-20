/** server/uploadthing.ts */
import { NextApiRequest, NextApiResponse } from "next";
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { prisma } from "~/server/db";
import { getAuth } from "~/server/auth";
const f = createUploadthing();

const auth = (req: NextApiRequest, res: NextApiResponse) => getAuth(req,res) // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {

  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f
    // Set permissions and file types for this FileRoute
    .fileTypes(["image", "video"])
    .maxSize("1GB")
    .middleware(async (req, res) => {
      // This code runs on your server before upload
        const data = await auth(req, res);
        console.log(data?.user)
       

      // If you throw, the user will not be able to upload
      if (!data?.user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: data?.user.id };
    })
        .onUploadComplete( async ({ metadata, file }) => {
            try {
                   const user = await prisma.video.create({
                     data: {
                       title: `title_${metadata?.userId}`,
                       url: file.url,
                       length: 2.55,
                       fileType: file.url,
                       userId: metadata?.userId,
                     },
                   });
            }
            catch (e) {
                console.log(e)
                
            }
       
            
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file info", file);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
