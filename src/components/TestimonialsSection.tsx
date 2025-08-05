import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Tú",
    subject: "PRJ301",
    avatar: "MT",
    content: "Mình học FE mà không biết bắt đầu từ đâu. Nhờ dịch vụ của Tuấn & Quân mà pass luôn kỳ này! Tài liệu rất chi tiết và dễ hiểu.",
    rating: 5
  },
  {
    name: "Trần Thị Hoa",
    subject: "DBI202", 
    avatar: "TH",
    content: "Khóa học cấp tốc Database giúp mình hiểu rõ SQL trong 3 buổi. Giá cả hợp lý, chất lượng tốt. Recommend!",
    rating: 5
  },
  {
    name: "Lê Văn Nam",
    subject: "PRO192",
    avatar: "LN",
    content: "Source code Java rất clean và có comment chi tiết. Làm project cuối kỳ dễ dàng hơn nhiều. Cảm ơn team!",
    rating: 5
  },
  {
    name: "Phạm Thị Lan",
    subject: "WED201c",
    avatar: "PL",
    content: "Dịch vụ edit video và làm slide rất chuyên nghiệp. Presentation của mình được điểm cao nhờ slide đẹp!",
    rating: 5
  },
  {
    name: "Hoàng Quang Minh",
    subject: "CSD201",
    avatar: "HM",
    content: "Hỗ trợ làm lab Data Structure rất tận tình. Giải thích từng bước, code rất dễ hiểu và optimize.",
    rating: 5
  },
  {
    name: "Vũ Thị Mai",
    subject: "Coursera",
    avatar: "VM",
    content: "Lấy được 5 chứng chỉ Coursera trong 2 tháng với sự hướng dẫn của anh Tuấn. Process rất rõ ràng!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Phản hồi từ sinh viên
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Những câu chuyện thành công thật từ các bạn sinh viên đã sử dụng dịch vụ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Môn {testimonial.subject}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;