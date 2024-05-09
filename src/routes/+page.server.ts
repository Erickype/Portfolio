import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return{
        experiences: await prisma.experience.findMany({
            orderBy: {
                id: 'asc'
            }
        }),
        personalProjects: await prisma.personalProject.findMany({
            orderBy:{
                createdAt: 'asc'
            }
        })
    }
};