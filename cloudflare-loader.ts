// cloudflare-loader.ts
export default function cloudflareLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  // Define os parâmetros de transformação
  const params = [
    `width=${width}`,
    `quality=${quality || 75}`,
    'format=auto', // Entrega WebP/AVIF automaticamente
    'fit=cover'    // Garante que a imagem preencha o espaço
  ];

  // Se a imagem já for uma URL absoluta, pegamos apenas o path ou tratamos a origem
  // Para fins de teste, assumimos que a imagem está no seu próprio domínio
  return `https://instituto-serfeliz-industrial.online/image/${params.join(',')}${src}`;
}