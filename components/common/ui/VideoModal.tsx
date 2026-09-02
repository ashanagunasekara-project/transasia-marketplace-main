"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { MouseEvent, ReactElement } from "react";
import { cloneElement, useState } from "react";

function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const pathname = parsed.pathname;

    if (host.includes("youtu.be")) {
      const id = pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }

    if (host.includes("youtube.com")) {
      if (pathname.startsWith("/watch")) {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
      if (pathname.startsWith("/embed/")) {
        const id = pathname.split("/embed/")[1]?.split("/")[0];
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
      if (pathname.startsWith("/shorts/")) {
        const id = pathname.split("/shorts/")[1]?.split("/")[0];
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
    }
  } catch {}

  return null;
}

function toVimeoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.toLowerCase().includes("vimeo.com")) return null;
    const id = parsed.pathname.split("/").filter(Boolean)[0];
    return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
  } catch {
    return null;
  }
}

function isDirectMediaFile(url: string): boolean {
  const normalized = url.split("?")[0].toLowerCase();
  return [".mp4", ".webm", ".ogg", ".mov", ".m3u8"].some((ext) =>
    normalized.endsWith(ext),
  );
}

interface VideoModalProps<
  P extends { onClick?: (event: MouseEvent<HTMLElement>) => void },
> {
  videoUrl?: string;
  ariaLabel?: string;
  children: ReactElement<P>;
}

export default function VideoModal<
  P extends { onClick?: (event: MouseEvent<HTMLElement>) => void },
>({ videoUrl, ariaLabel = "Video dialog", children }: VideoModalProps<P>) {
  const [open, setOpen] = useState(false);
  const sourceUrl = videoUrl?.trim() ?? "";
  const youTubeEmbed = sourceUrl ? toYouTubeEmbedUrl(sourceUrl) : null;
  const vimeoEmbed = sourceUrl ? toVimeoEmbedUrl(sourceUrl) : null;
  const directFile = sourceUrl ? isDirectMediaFile(sourceUrl) : false;

  const trigger = cloneElement(children, {
    onClick: (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      children.props.onClick?.(event);
      setOpen(true);
    },
  } as P);

  return (
    <>
      {trigger}

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="rbt-video-modal-overlay"
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(5px)",
              zIndex: 1300,
            }}
          />

          <Dialog.Content
            className="rbt-video-modal-content"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              maxWidth: "960px",
              padding: "0 16px",
              zIndex: 1301,
              background: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <Dialog.Title
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                border: 0,
              }}
            >
              {ariaLabel}
            </Dialog.Title>

            <div
              className="rbt-video-modal-inner"
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                backgroundColor: "#000",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {open && sourceUrl ? (
                youTubeEmbed || vimeoEmbed ? (
                  <iframe
                    title={ariaLabel}
                    src={youTubeEmbed ?? vimeoEmbed ?? undefined}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ width: "100%", height: "100%", border: 0 }}
                  />
                ) : directFile ? (
                  <video
                    src={sourceUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      color: "#fff",
                      textAlign: "center",
                      padding: "24px",
                    }}
                  >
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rbt-btn rbt-btn-sm"
                    >
                      Open video in a new tab
                    </a>
                  </div>
                )
              ) : null}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
