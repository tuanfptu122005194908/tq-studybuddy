import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Zap, Video, Code, ExternalLink } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Hỗ trợ chứng chỉ Coursera",
    description: "Hướng dẫn chọn khóa học, theo dõi tiến độ, hỗ trợ làm bài và lấy chứng chỉ nhanh chóng.",
    cta: "Tư vấn Coursera miễn phí",
    color: "text-primary"
  },
  {
    icon: FileText,
    title: "Tài liệu & Source Code",
    description: "Cung cấp đề thi cũ, bài giải mẫu, tài liệu PDF, và mã nguồn các môn lập trình, cơ sở dữ liệu, mạng...",
    cta: "Xem tài liệu ngay",
    color: "text-secondary"
  },
  {
    icon: Zap,
    title: "Khóa học cấp tốc online",
    description: "Các khóa học rút gọn (2–5 buổi) giúp ôn thi hiệu quả, luyện đề và hiểu bài nhanh. Giá từ 100k - 300k",
    cta: "Đăng ký ôn cấp tốc",
    color: "text-orange-500"
  },
  {
    icon: Video,
    title: "Media & Trình bày",
    description: "Edit video, viết kịch bản, thiết kế slide PowerPoint đẹp, đúng chuẩn học thuật cho thuyết trình.",
    cta: "Liên hệ team Media",
    color: "text-purple-500"
  },
  {
    icon: Code,
    title: "Hỗ trợ Project, Lab, bài tập lớn",
    description: "Hỗ trợ làm project, viết báo cáo, hoàn thiện bài lab theo môn học cụ thể (Java, Python, Web, DB,...).",
    cta: "Yêu cầu hỗ trợ",
    color: "text-green-600"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dịch vụ hỗ trợ học tập
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ để hỗ trợ sinh viên trong suốt quá trình học tập
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-6 min-h-[4rem] flex items-center">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;