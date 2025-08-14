import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { blogPosts } from "../data/blogPost.js";
import BlogCard from "./BlogCard.jsx";

export const ArticleSection = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        Latest articles
      </h2>
      <div className="mt-5 rounded-2xl bg-muted/50 p-4 md:p-5 md:flex md:items-center md:gap-6">
        <div className="hidden md:flex items-center gap-2">
          {["Highlight", "Cat", "Inspiration", "General"].map((label, i) => {
            const active = i === 0; // UI อย่างเดียว
            return (
              <button
                key={label}
                type="button"
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-muted text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* กล่องฟีลเตอร์ */}
        <div className="relative w-full md:max-w-md md:ml-auto cursor-pointer">
          <div className="">
            <Input
              placeholder="Search"
              aria-label="Search articles"
              className="md:h-10 rounded-xl pr-10"
            />
            <Search className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="px-4 md:hidden">
        <h3 className="text-[#75716B] mb-2 font-medium">Category</h3>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Highlight</SelectLabel>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full mb-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((item, index) => {
            return <BlogCard key={index} blogInfo={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
