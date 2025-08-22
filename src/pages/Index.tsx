import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string;
  unread?: number;
  online?: boolean;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  isOwn?: boolean;
  isAI?: boolean;
}

export default function Index() {
  const [activeChat, setActiveChat] = useState<string>("1");
  const [message, setMessage] = useState("");
  const [sidebarTab, setSidebarTab] = useState<"info" | "tasks" | "bookmarks">("info");

  const chats: Chat[] = [
    { id: "1", name: "Мария Петрова", lastMessage: "Привет! Как дела с проектом?", time: "14:30", unread: 2, online: true },
    { id: "2", name: "Команда разработки", lastMessage: "Юра: Исправил баги в API", time: "13:45", unread: 1 },
    { id: "3", name: "Алекс (ИИ)", lastMessage: "Создал сводку встречи для тебя", time: "12:20", unread: 3 },
    { id: "4", name: "Иван Сидоров", lastMessage: "Отлично, спасибо!", time: "11:15" },
    { id: "5", name: "Закладки", lastMessage: "Сохранено: Документация API", time: "10:30" },
  ];

  const messages: Message[] = [
    { id: "1", sender: "Мария Петрова", content: "Привет! Как продвигается работа над новым проектом?", time: "14:25" },
    { id: "2", sender: "Ты", content: "Привет! Все идет по плану. Сегодня закончили базовую архитектуру", time: "14:26", isOwn: true },
    { id: "3", sender: "Мария Петрова", content: "Отлично! А что с дизайном интерфейса?", time: "14:28" },
    { id: "4", sender: "Алекс", content: "Могу создать сводку по задачам проекта, если нужно", time: "14:29", isAI: true },
    { id: "5", sender: "Ты", content: "Дизайн почти готов. Алекс, да, создай сводку пожалуйста", time: "14:30", isOwn: true },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900">Untitled</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Icon name="Settings" size={20} />
          </Button>
          <Avatar>
            <AvatarFallback>ТЫ</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Chat List */}
        <div className="w-80 bg-slate-50 border-r border-slate-200 flex flex-col">
          <div className="p-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder="Поиск чатов..." 
                className="pl-10 bg-white"
              />
            </div>
          </div>
          
          <ScrollArea className="flex-1">
            <div className="px-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    activeChat === chat.id ? 'bg-primary/10' : 'hover:bg-slate-100'
                  }`}
                >
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>{chat.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-slate-900 truncate">{chat.name}</h3>
                      <span className="text-xs text-slate-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-slate-600 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread && (
                    <Badge className="ml-2 bg-primary text-white text-xs min-w-[20px] h-5">
                      {chat.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>МП</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-slate-900">Мария Петрова</h2>
                <p className="text-sm text-green-600 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  онлайн
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Video" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MoreVertical" size={20} />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-6 py-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'} ${msg.isAI ? 'justify-center' : ''}`}
                >
                  {msg.isAI ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 max-w-md flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Bot" size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-900">Алекс</p>
                        <p className="text-sm text-blue-700">{msg.content}</p>
                        <p className="text-xs text-blue-500 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={`max-w-md ${msg.isOwn ? 'bg-primary text-white' : 'bg-slate-100'} rounded-2xl px-4 py-2`}>
                      {!msg.isOwn && (
                        <p className="text-xs font-medium mb-1 opacity-70">{msg.sender}</p>
                      )}
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isOwn ? 'text-primary-foreground/70' : 'text-slate-500'}`}>
                        {msg.time}
                        {msg.isOwn && <Icon name="Check" size={12} className="inline ml-1" />}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="bg-white border-t border-slate-200 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <Icon name="Paperclip" size={20} />
              </Button>
              <div className="flex-1 relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Напишите сообщение..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="pr-20"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Icon name="Smile" size={18} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Mic" size={18} />
                  </Button>
                </div>
              </div>
              <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-slate-50 border-l border-slate-200 flex flex-col">
          <div className="border-b border-slate-200">
            <div className="flex">
              <button
                onClick={() => setSidebarTab("info")}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  sidebarTab === "info" ? 'text-primary border-b-2 border-primary' : 'text-slate-600'
                }`}
              >
                Инфо
              </button>
              <button
                onClick={() => setSidebarTab("tasks")}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  sidebarTab === "tasks" ? 'text-primary border-b-2 border-primary' : 'text-slate-600'
                }`}
              >
                Задачи
              </button>
              <button
                onClick={() => setSidebarTab("bookmarks")}
                className={`flex-1 px-4 py-3 text-sm font-medium ${
                  sidebarTab === "bookmarks" ? 'text-primary border-b-2 border-primary' : 'text-slate-600'
                }`}
              >
                Закладки
              </button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            {sidebarTab === "info" && (
              <div className="space-y-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-3">
                    <AvatarFallback>МП</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-slate-900">Мария Петрова</h3>
                  <p className="text-sm text-slate-600">@maria_petrova</p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Онлайн</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">ИИ-инструменты</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Создать сводку
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Languages" size={16} className="mr-2" />
                      Перевести сообщения
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Icon name="Search" size={16} className="mr-2" />
                      Поиск по истории
                    </Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Медиафайлы</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-slate-200 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {sidebarTab === "tasks" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900">Задачи</h4>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-1" />
                    Добавить
                  </Button>
                </div>

                <div className="space-y-3">
                  <Card className="p-3">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">Завершить презентацию проекта</p>
                        <p className="text-xs text-slate-500">До 18:00 сегодня</p>
                        <Badge variant="outline" className="mt-1">работа</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-3">
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">Созвониться с командой</p>
                        <p className="text-xs text-slate-500">Завтра в 10:00</p>
                        <Badge variant="outline" className="mt-1">встреча</Badge>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <Icon name="Bot" size={16} className="text-primary mt-1" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Предложение от Алекса</p>
                        <p className="text-xs text-blue-700 mt-1">Создать задачу "Обсудить бюджет" на основе вашей переписки?</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline" className="h-6 text-xs">Да</Button>
                          <Button size="sm" variant="ghost" className="h-6 text-xs">Нет</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {sidebarTab === "bookmarks" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900">Закладки</h4>
                  <Button variant="ghost" size="sm">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>

                <div className="space-y-3">
                  <Card className="p-3 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <Icon name="FileText" size={16} className="text-slate-500 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">Документация API v2.0</p>
                        <p className="text-xs text-slate-500">Сохранено из чата "Команда разработки"</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">важно</Badge>
                          <Badge variant="outline" className="text-xs">документы</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-3 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start space-x-3">
                      <Icon name="Link" size={16} className="text-slate-500 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">Ссылка на дизайн-систему</p>
                        <p className="text-xs text-slate-500">Сохранено из чата "Дизайнеры"</p>
                        <div className="flex space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">дизайн</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-slate-100 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Bot" size={16} className="text-primary" />
                      <p className="text-sm font-medium text-slate-900">Умная сортировка</p>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">Алекс может организовать ваши закладки по папкам и темам</p>
                    <Button size="sm" variant="outline" className="w-full">
                      Организовать закладки
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}