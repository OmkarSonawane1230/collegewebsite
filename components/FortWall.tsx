export function FortWall() {
  return (
    <div className="w-full relative">
      {/* Decorative Border Wrapper */}
      <div className="relative flex flex-col items-center">
        {/* Battlements (The "teeth") - Tighter spacing and smaller for a subtle border look */}
        <div className="w-full flex justify-center space-x-[1px] px-0 mb-[-1px] z-10">
          {[...Array(60)].map((_, i) => (
            <div 
              key={i} 
              className="flex-1 h-2.5 bg-[#4A3728] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]"
              style={{
                backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-leather.png")`,
                backgroundBlendMode: 'multiply'
              }}
            />
          ))}
        </div>
        
        {/* Main Border Line - Connecting the teeth */}
        <div className="w-full h-[3px] bg-[#4A3728] relative shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 opacity-80"
               style={{
                 backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-leather.png")`,
                 backgroundBlendMode: 'multiply'
               }}
          />
        </div>
      </div>
    </div>
  );
}
