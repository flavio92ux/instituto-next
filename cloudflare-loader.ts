export default function cloudflareLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  
  // Se a imagem for externa (ex: S3), você precisa garantir que o 
  // Cloudflare Images tenha permissão para puxar de "Remote Sources"
  return `https://instituto-serfeliz-industrial.online/cdn-cgi/image/${params.join(',')}/${src}`
}