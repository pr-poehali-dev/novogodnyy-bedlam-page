import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; duration: number; delay: number }>>([]);
  const paymentUrl = 'https://olvonata.ru/pl/lite/block?id=1391580';

  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake text-2xl"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❄
        </div>
      ))}

      <div
        className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 248, 220, 0.85), rgba(255, 248, 220, 0.85)), url('https://cdn.poehali.dev/projects/0796425f-1395-4946-9bd1-0bdb5c996a4f/files/f9d01999-2af8-46e0-92c9-22c11341f8ab.jpg')`,
        }}
      >
        <div className="max-w-2xl w-full text-center space-y-8 relative z-10">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
              Новогодний бедлам
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              🎄 Уютное новогоднее празднование вместе 🐱
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
                🎉 Присоединиться
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-8 text-4xl md:text-5xl animate-fade-in">
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎄</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🐱</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎁</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🐱</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;