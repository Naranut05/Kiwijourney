import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


export const ArticleSection = () => {
  return (

    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Latest articles
        </h2>
        <div className="mt-5 rounded-2xl bg-muted/50 p-4 md:p-5 md:flex md:items-center md:gap-6">
        <div className="hidden md:flex items-center gap-2">
  {["Highlight","Cat","Inspiration","General"].map((label, i) => {
    const active = i === 0; // UI อย่างเดียว
    return (
      <button
        key={label}
        type="button"
        className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
          active ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"
        }`}
      >
        {label}
      </button>
    );
  })}
</div>

          {/* กล่องฟีลเตอร์ */}
          <div className="relative w-full md:max-w-md md:ml-auto">
            <div className="relative">
              <Input
                placeholder="Search"
                aria-label="Search articles"
                className="md:h-10 rounded-xl pr-10"
              />
              <Search className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
