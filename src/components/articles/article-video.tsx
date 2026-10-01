"use client";

import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { articleLabels, type Article } from "@/content/articles";
import type { Locale } from "@/lib/constants";

export function ArticleVideo({ video, locale }: { video: NonNullable<Article["video"]>; locale: Locale }) {
  const copy = articleLabels[locale];
  const [loaded, setLoaded] = useState(false);
  const iframe = useRef<HTMLIFrameElement>(null);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-xl bg-deep">
        {loaded ? (
          <iframe
            ref={iframe}
            src={`https://drive.google.com/file/d/${video.driveId}/preview`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={() => iframe.current?.focus()}
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`${copy.play}: ${video.title}`}
            className="group absolute inset-0 size-full overflow-hidden text-white focus-visible:outline-offset-[-5px]"
          >
            <Image
              src={video.poster}
              alt={video.posterAlt}
              fill
              sizes="(min-width: 1280px) 820px, (min-width: 1024px) 70vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" aria-hidden="true" />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="inline-flex size-16 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm md:size-20">
                <Play className="ml-1 size-6 fill-current md:size-7" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold tracking-wide">{copy.play}</span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 space-y-3 text-sm leading-6">
        <p>{video.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <p>{copy.videoSource}</p>
          <a
            href={`https://drive.google.com/file/d/${video.driveId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-ink transition-colors hover:text-blue"
          >
            {copy.openVideo} <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
