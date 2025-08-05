import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import techAvatar from "@/assets/tech-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src={techAvatar} 
                  alt="Tuấn & Quân" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Play className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tuấn & Quân
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-4 font-medium">
              Người đồng hành học tập đáng tin cậy
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Hỗ trợ sinh viên đại học trong học tập, ôn thi và kỹ năng mềm – từ A đến Z. 
              Cộng đồng tự học lập trình 400+ thành viên
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Tham gia ngay
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Tìm hiểu thêm
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <Button 
                variant="ghost" 
                size="sm" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 p-0"
                onClick={() => window.open('https://www.youtube.com/@tuanvaquanfptu', '_blank')}
              >
                <Play className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 p-0"
                onClick={() => window.open('https://www.facebook.com/tuanvaquan', '_blank')}
              >
                📘
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 p-0"
                onClick={() => window.open('mailto:lequan12305@gmail.com')}
              >
                ✉️
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;