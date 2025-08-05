import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const subjectsBySemester = {
  "Học kỳ 1": ["SSL101c", "PRF192", "PFP191", "CSI106", "CEA201", "MAE101"],
  "Học kỳ 2": ["PRO192", "MAD101", "OSG202", "NWC204", "WED201c", "SSG104", "OBE102c"],
  "Học kỳ 3": ["CSD201", "DBI202", "JPD113", "WED201c"],
  "Học kỳ 4": ["PRJ301", "PRJ302", "JPD123", "IOT102", "MAS291", "SWE201c"],
  "Học kỳ 5": ["SWR302", "SWT301", "PRN212", "ITE302c"],
  "Học kỳ 6": ["SWD392", "SYB302c", "PMG201c", "PRU212"],
  "Học kỳ 7": ["MLN111", "MLN121", "WDU203c"]
};

const SubjectsSection = () => {
  const handleViewService = () => {
    window.open('https://docs.google.com/document/d/1THKvW20D4o-bPxCyrillclf1R5Z_29Os5EpOX6G--dw/edit?usp=sharing', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tìm dịch vụ theo môn học
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chọn học kỳ và môn học để xem các dịch vụ hỗ trợ chi tiết
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="Học kỳ 1" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              {Object.keys(subjectsBySemester).map((semester) => (
                <TabsTrigger key={semester} value={semester} className="text-sm">
                  {semester}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(subjectsBySemester).map(([semester, subjects]) => (
              <TabsContent key={semester} value={semester}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject) => (
                    <Card key={subject} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="text-center pb-3">
                        <CardTitle className="text-lg font-semibold text-primary">
                          {subject}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          Môn học {semester}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center pt-0">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          onClick={handleViewService}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Xem dịch vụ
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;