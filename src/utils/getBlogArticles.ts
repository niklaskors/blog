import { readdir, stat } from 'fs/promises';
import { BlogMetadata } from '../types';
import { DateTime } from 'luxon';
import { join } from 'path';

export async function getBlogArticlesFileList(subdir = ''): Promise<string[]> {
  const files: string[] = [];
  const fileFromDir = await readdir(join('./blog', subdir), { withFileTypes: true });

  for (const file of fileFromDir) {
    if (file.isDirectory()) {
      files.push(...(await getBlogArticlesFileList(join(subdir, file.name))));
    } else {
      files.push(join(subdir, file.name));
    }
  }

  return files;
}

export async function getBlogArticlesMetadata(subdir = ''){
    const blogArticleFiles = await getBlogArticlesFileList(subdir);

    const blogArticles: {fileName: string; metadata: BlogMetadata}[] = [];

    for(const blogArticleFile of blogArticleFiles){
      const { default: Post, data } = await import(`@/blog/${blogArticleFile}`);
      
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