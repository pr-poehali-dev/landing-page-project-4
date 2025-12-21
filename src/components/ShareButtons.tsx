import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ShareButtons = () => {
  const shareUrl = window.location.href;
  const shareTitle = "Энциклопедия Профессий - Полный гид по IT-профессиям";
  const shareText = "Нашел отличный каталог IT-курсов и профессий! 500+ специальностей, 2000+ курсов";

  const handleShare = (platform: string) => {
    let url = "";
    
    switch(platform) {
      case "vk":
        url = `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
    }
    
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-foreground">Поделиться с друзьями</h3>
      <div className="flex gap-3 flex-wrap justify-center">
        <Button
          onClick={() => handleShare("vk")}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-[#0077FF] hover:text-white hover:border-[#0077FF] transition-colors"
        >
          <Icon name="Share2" size={16} />
          ВКонтакте
        </Button>
        <Button
          onClick={() => handleShare("telegram")}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-[#0088cc] hover:text-white hover:border-[#0088cc] transition-colors"
        >
          <Icon name="Send" size={16} />
          Telegram
        </Button>
        <Button
          onClick={() => handleShare("whatsapp")}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
        >
          <Icon name="MessageCircle" size={16} />
          WhatsApp
        </Button>
        <Button
          onClick={() => handleShare("twitter")}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
        >
          <Icon name="Twitter" size={16} />
          Twitter
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
