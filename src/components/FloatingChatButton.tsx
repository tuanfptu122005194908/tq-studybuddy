import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  const handleChatClick = () => {
    window.open('https://www.facebook.com/tuanvaquan', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="hero"
        size="lg"
        onClick={handleChatClick}
        className="rounded-full w-16 h-16 p-0 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default FloatingChatButton;