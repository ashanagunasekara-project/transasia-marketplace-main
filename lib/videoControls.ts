const VIDEO_ATTR = "data-video";
const PAUSE_BTN_ATTR = "data-pause-btn";

const VIDEO_SELECTOR = `[${VIDEO_ATTR}]`;
const PAUSE_BTN_SELECTOR = `[${PAUSE_BTN_ATTR}]`;

export function initVideoControls(container: HTMLElement | null): void | (() => void) {
  if (!container) return;

  const videoEls = container.querySelectorAll<HTMLVideoElement>(VIDEO_SELECTOR);
  const pauseBtn = container.querySelector<HTMLElement>(PAUSE_BTN_SELECTOR);
  if (!videoEls.length || !pauseBtn) return;

  let timeout: ReturnType<typeof setTimeout> | undefined;
  let rafId: number | null = null;
  let pendingX = 0;
  let pendingY = 0;
  let activeVideo: HTMLVideoElement | null = videoEls[0] ?? null;

  const setPauseButtonText = (video: HTMLVideoElement | null) => {
    if (!video) return;
    pauseBtn.textContent = video.paused ? "PLAY VIDEO" : "PAUSE VIDEO";
  };

  const flushPauseButtonPosition = () => {
    pauseBtn.style.left = `${pendingX}px`;
    pauseBtn.style.top = `${pendingY}px`;
    rafId = null;
  };

  const schedulePauseButtonPositionUpdate = (event: MouseEvent) => {
    const rect = container.getBoundingClientRect();
    pendingX = event.clientX - rect.left;
    pendingY = event.clientY - rect.top;
    if (rafId !== null) return;
    rafId = window.requestAnimationFrame(flushPauseButtonPosition);
  };

  const hidePauseButton = () => {
    pauseBtn.style.display = "none";
  };

  const handleMouseMove = (event: MouseEvent) => {
    const hoveredEl = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest(VIDEO_SELECTOR) as HTMLVideoElement | null;
    if (hoveredEl && hoveredEl !== activeVideo) {
      activeVideo = hoveredEl;
    }
    setPauseButtonText(activeVideo);
    pauseBtn.style.display = "flex";
    schedulePauseButtonPositionUpdate(event);
    clearTimeout(timeout);
    timeout = setTimeout(hidePauseButton, 2000);
  };

  const handleMouseLeave = () => {
    hidePauseButton();
  };

  const handleVideoClick = (e: Event) => {
    const vd = e.currentTarget as HTMLVideoElement;
    activeVideo = vd;
    if (vd.paused) {
      vd.play();
    } else {
      vd.pause();
    }
    setPauseButtonText(vd);
  };

  const handleVideoStateChange = (e: Event) => {
    const changedVideo = e.currentTarget as HTMLVideoElement;
    if (changedVideo === activeVideo) {
      setPauseButtonText(activeVideo);
    }
  };

  container.addEventListener("mousemove", handleMouseMove, { passive: true });
  container.addEventListener("mouseleave", handleMouseLeave);
  videoEls.forEach((v) => {
    v.addEventListener("click", handleVideoClick);
    v.addEventListener("play", handleVideoStateChange);
    v.addEventListener("pause", handleVideoStateChange);
  });
  setPauseButtonText(activeVideo);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    videoEls.forEach((v) => {
      v.removeEventListener("click", handleVideoClick);
      v.removeEventListener("play", handleVideoStateChange);
      v.removeEventListener("pause", handleVideoStateChange);
    });
    clearTimeout(timeout);
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  };
}
