import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Untitled</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-primary transition-colors">Функции</a>
            <a href="#security" className="text-slate-600 hover:text-primary transition-colors">Безопасность</a>
            <a href="#download" className="text-slate-600 hover:text-primary transition-colors">Скачать</a>
          </div>
          <Button>Начать</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Новое поколение мессенджеров
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Мессенджер с
                  <span className="text-primary"> ИИ-ассистентом</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Универсальная коммуникационная платформа с персональным искусственным интеллектом. 
                  Полная конфиденциальность, кросс-платформенность и неограниченные возможности.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать бесплатно
                </Button>
                <Button variant="outline" size="lg" className="border-slate-300 px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>100К+ пользователей</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  <span>4.9/5 оценка</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-b from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/img/f88340a4-abcd-4e1e-9b9c-4f214d61be65.jpg" 
                  alt="Untitled messenger interface" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Icon name="Bot" size={24} />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-600">Алекс онлайн</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Ключевые возможности</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Все инструменты для современного общения в одном приложении
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Brain" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">ИИ-ассистент Алекс</h3>
                <p className="text-slate-600 mb-4">
                  Персональный ИИ анализирует сообщения, создает сводки, переводит текст и помогает с задачами
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Краткие сводки сообщений
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Умный поиск по смыслу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Голосовые команды
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Полная безопасность</h3>
                <p className="text-slate-600 mb-4">
                  Сквозное шифрование E2E, биометрия и полный контроль над конфиденциальностью
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    End-to-end шифрование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Биометрическая защита
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Секретные чаты
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-scale">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Cloud" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Облачная синхронизация</h3>
                <p className="text-slate-600 mb-4">
                  Все данные синхронизируются между устройствами. Работайте везде с одного аккаунта
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Мгновенная синхронизация
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Облачное хранилище
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Кросс-платформенность
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Productivity Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">
                Система организации и продуктивности
              </h2>
              <p className="text-xl text-slate-600">
                Встроенные инструменты для управления задачами, напоминаниями и закладками. 
                ИИ помогает структурировать информацию и не забывать важное.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckSquare" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Умные напоминания</h3>
                    <p className="text-slate-600">Ставьте напоминания не только по времени, но и по контексту</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Bookmark" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Система закладок с тегами</h3>
                    <p className="text-slate-600">Сохраняйте сообщения в личном чате с организацией по папкам и тегам</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Автоматические итоги</h3>
                    <p className="text-slate-600">ИИ создает персональные отчеты о выполненных задачах и важных событиях</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <Icon name="MessageSquare" size={32} className="text-blue-600 mb-4" />
                  <h3 className="font-semibold text-blue-900 mb-2">Чаты</h3>
                  <p className="text-blue-700 text-sm">Организованные по активности с умным поиском</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <Icon name="CheckSquare" size={32} className="text-green-600 mb-4" />
                  <h3 className="font-semibold text-green-900 mb-2">Задачи</h3>
                  <p className="text-green-700 text-sm">Интегрированный трекер с ИИ-помощью</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <Icon name="Bookmark" size={32} className="text-purple-600 mb-4" />
                  <h3 className="font-semibold text-purple-900 mb-2">Закладки</h3>
                  <p className="text-purple-700 text-sm">Персональное хранилище с тегами</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <Icon name="Bell" size={32} className="text-orange-600 mb-4" />
                  <h3 className="font-semibold text-orange-900 mb-2">Напоминания</h3>
                  <p className="text-orange-700 text-sm">Контекстные уведомления от ИИ</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Безопасность и конфиденциальность</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ваши данные защищены на военном уровне. Полный контроль над конфиденциальностью.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Lock" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">E2E шифрование</h3>
              <p className="text-slate-400 text-sm">Сквозное шифрование всех сообщений и файлов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Fingerprint" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Биометрия</h3>
              <p className="text-slate-400 text-sm">Face ID, Touch ID или PIN-код для входа</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="EyeOff" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Секретные чаты</h3>
              <p className="text-slate-400 text-sm">Сообщения удаляются после прочтения</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-2">Контроль ИИ</h3>
              <p className="text-slate-400 text-sm">Настройка уровня доступа ассистента к данным</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Начните использовать сегодня</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Доступно на всех платформах. Скачайте бесплатно и откройте новые возможности общения.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Button variant="outline" className="h-16 flex items-center justify-center space-x-3 border-slate-300">
              <Icon name="Smartphone" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-500">Скачать для</div>
                <div className="font-semibold">iOS</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-16 flex items-center justify-center space-x-3 border-slate-300">
              <Icon name="Smartphone" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-500">Скачать для</div>
                <div className="font-semibold">Android</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-16 flex items-center justify-center space-x-3 border-slate-300">
              <Icon name="Monitor" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-500">Скачать для</div>
                <div className="font-semibold">Windows</div>
              </div>
            </Button>
            
            <Button variant="outline" className="h-16 flex items-center justify-center space-x-3 border-slate-300">
              <Icon name="Monitor" size={24} />
              <div className="text-left">
                <div className="text-xs text-slate-500">Скачать для</div>
                <div className="font-semibold">macOS</div>
              </div>
            </Button>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Или используйте Web-версию</h3>
            <p className="text-slate-600 mb-6">Полнофункциональная версия прямо в браузере</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Globe" size={20} className="mr-2" />
              Открыть Web-версию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="MessageSquare" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Untitled</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Мессенджер нового поколения с персональным ИИ-ассистентом. 
                Общайтесь умнее, безопаснее и эффективнее.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Продукт</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Функции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обновления</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Untitled. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}