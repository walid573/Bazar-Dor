import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[74vh] bg-[#F0FFF0]/50  overflow-hidden">
     
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-green-50" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-green-50" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl text-center">

         
          <div className="relative mx-auto mb-8 w-fit">
            <div className="flex items-center justify-center gap-1">
              <span className="text-[120px] font-black leading-none tracking-tight text-emerald-900 sm:text-[160px]">
                4
              </span>

              {/* 0 */}
              <div className="relative flex h-30 w-30 items-center justify-center rounded-full bg-emerald-900 sm:h-40 sm:w-40">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white sm:h-24 sm:w-24">
                  <div className="relative">
                    {/* Eyes */}
                    <div className="flex gap-4">
                      <span className="h-3 w-3 rounded-full bg-emerald-900" />
                      <span className="h-3 w-3 rounded-full bg-emerald-900" />
                    </div>

                    {/* Sad mouth */}
                    <div className="mx-auto mt-3 h-4 w-7 rounded-t-full border-t-4 border-emerald-900" />
                  </div>
                </div>
              </div>

              <span className="text-[120px] font-black leading-none tracking-tight text-emerald-900 sm:text-[160px]">
                4
              </span>
            </div>

            {/* Page not found sign */}
            <div className="absolute -bottom-4 -right-2 rotate-6 rounded-lg border-2 border-amber-200 bg-amber-100 px-4 py-3 shadow-sm sm:right-0">
              <p className="text-sm font-bold text-amber-900">
                Page
              </p>
              <p className="text-sm font-bold text-amber-900">
                Not Found
              </p>
            </div>

            {/* Plants */}
            <div className="absolute -bottom-5 left-4 text-4xl">
              🌱
            </div>

            <div className="absolute -bottom-5 right-20 text-3xl">
              🌿
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
            আপনি যে পেজটি খুঁজছেন, সেটি হয়তো সরিয়ে ফেলা হয়েছে,
            নাম পরিবর্তন করা হয়েছে, অথবা সাময়িকভাবে পাওয়া যাচ্ছে না।
          </p>

          {/* Home button */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v10h14V9" />
              <path d="M9 19v-6h6v6" />
            </svg>

            হোমে ফিরে যান

            <span className="text-lg">→</span>
          </Link>

         
        </div>
      </main>
    </div>
  );
}