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
    <div className="flex flex-col items-center gap-4 py-8 border-t border-border">
      <h3 className="text-lg font-semibold text-foreground">Поделиться с друзьями</h3>
      <div className="flex gap-3 flex-wrap justify-center">
        <Button
          onClick={() => handleShare("vk")}
          size="sm"
          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#0077FF] hover:text-white border-0 transition-colors"
        >
          <Icon name="Share2" size={16} />
          ВКонтакте
        </Button>
        <Button
          onClick={() => handleShare("telegram")}
          size="sm"
          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#0088cc] hover:text-white border-0 transition-colors"
        >
          <Icon name="Send" size={16} />
          Telegram
        </Button>
        <Button
          onClick={() => handleShare("whatsapp")}
          size="sm"
          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#25D366] hover:text-white border-0 transition-colors"
        >
          <Icon name="MessageCircle" size={16} />
          WhatsApp
        </Button>
        <Button
          onClick={() => handleShare("twitter")}
          size="sm"
          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#1DA1F2] hover:text-white border-0 transition-colors"
        >
          <Icon name="Twitter" size={16} />
          Twitter
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;