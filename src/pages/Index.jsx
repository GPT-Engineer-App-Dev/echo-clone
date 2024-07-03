import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Search, Send } from "lucide-react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { content: message, timestamp: new Date() }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="App Logo" className="mx-auto object-cover w-8 h-8" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <span className="font-semibold">TeleClone</span>
          </div>
        </header>
        <div className="p-4">
          <div className="relative">
            <Input placeholder="Search..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          {/* Chat List */}
          <div className="space-y-4">
            {/* Example Chat Item */}
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">User Name</span>
                  <span className="text-xs text-muted-foreground">12:34 PM</span>
                </div>
                <p className="text-sm text-muted-foreground">Last message snippet...</p>
              </div>
            </div>
            {/* Repeat Chat Items as needed */}
          </div>
        </ScrollArea>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        <header className="flex items-center gap-4 p-4 border-b">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Chat User Avatar" className="mx-auto object-cover w-10 h-10" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-semibold">Chat User Name</span>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </header>
        <ScrollArea className="flex-1 p-4">
          {/* Message Area */}
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-8 h-8" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs text-muted-foreground">{msg.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Separator />
        <div className="p-4 flex items-center gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
