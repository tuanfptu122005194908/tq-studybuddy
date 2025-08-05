import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Youtube, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Facebook,
    title: "Facebook",
    subtitle: "Tuấn và Quân",
    description: "Nhắn tin trực tiếp qua Facebook để được tư vấn nhanh nhất",
    link: "https://www.facebook.com/tuanvaquan",
    color: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100"
  },
  {
    icon: Youtube,
    title: "Youtube", 
    subtitle: "@tuanvaquanfptu",
    description: "Kênh YouTube với nhiều tutorial và kinh nghiệm học tập",
    link: "https://www.youtube.com/@tuanvaquanfptu",
    color: "text-red-600",
    bgColor: "bg-red-50 hover:bg-red-100"
  },
  {
    icon: Mail,
    title: "Gmail",
    subtitle: "lequan12305@gmail.com", 
    description: "Gửi email chi tiết về yêu cầu hỗ trợ của bạn",
    link: "mailto:lequan12305@gmail.com",
    color: "text-gray-600",
    bgColor: "bg-gray-50 hover:bg-gray-100"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Liên hệ & Hỗ trợ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Chọn cách liên hệ phù hợp nhất!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => window.open(method.link, '_blank')}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{method.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {method.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Liên hệ ngay
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Chat Button */}
        <div className="text-center">
          <Card className="inline-block bg-hero-gradient">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-white">
                <MessageCircle className="w-8 h-8" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Cần hỗ trợ ngay?</h3>
                  <p className="text-white/90">Chat trực tiếp với đội ngũ tư vấn</p>
                </div>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open('https://www.facebook.com/tuanvaquan', '_blank')}
                >
                  Chat ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;