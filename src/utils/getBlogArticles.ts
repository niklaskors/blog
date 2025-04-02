import { readdir, stat } from 'fs/promises';
import { BlogMetadata } from '../types';
import { DateTime } from 'luxon';

export async function getBlogArticlesFileList(){
    return await readdir('./blog');
}

export async function getBlogArticlesMetadata(){
    const blogArticleFiles = await getBlogArticlesFileList();

    const blogArticles: {fileName: string; metadata: BlogMetadata}[] = [];

    for(const blogArticleFile of blogArticleFiles){
      const { default: Post, data } = await import(`@/blog/${blogArticleFile}`);
      const stats = await stat(`./blog/${blogArticleFile}`)
      
      console.log(stats)

      if(!data?.metadata?.title || data?.private === false){
        continue;
      }

      blogArticles.push({
        fileName: blogArticleFile,
        metadata: data.metadata
      })
    }

    return blogArticles.sort((a,b)=> {
      if(!a.metadata?.createdAt){
        return 1;
      }

      if(!b.metadata?.createdAt){
        return -1;
      }

      const createdAtA = DateTime.fromFormat(a.metadata.createdAt, 'dd/MM/yyyy').toUnixInteger();
      const createdAtB = DateTime.fromFormat(b.metadata.createdAt, 'dd/MM/yyyy').toUnixInteger();

      if(createdAtA > createdAtB){
        return -1;
      }
      if(createdAtB < createdAtA){
        return 1;
      }

      return 0;
    })
}