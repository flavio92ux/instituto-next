import Image from 'next/image';
import cloudflareLoader from '@/cloudflare-loader';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-14 w-14 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br"></div>
        <Image
          loader={cloudflareLoader}
          src="/instituto.jpeg" 
          alt="Logo"
          width={48}
          height={48}
          sizes="48px"
          className="relative z-12 h-12 w-12"
        />
      </div>
      <div className="ml-2">
        <div className="text-xl font-bold text-blue-500">Instituto Ser Feliz</div>
        <div className="text-xs font-medium text-red-500">Industrial Contagem</div>
      </div>
    </div>
  );
};

export default Logo;