export default function PageBanner() {
    return (
        <section className="relative w-full max-h-[445px] max-w-[1445px] m-auto mt-14  h-[445px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner1.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
  
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-[36px] font-light leading-[54px]">
            MKS PAMP GROUP
          </h2>
          <div className="w-[100px] h-[1px] bg-gold my-6" />
          <p className="text-[30px] font-light leading-[23px]">
          A leading integrated precious metals group
          </p>
        </div>
      </section>
    );
  }